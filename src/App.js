import { Box, Container, Grid, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputCard from "./components/InputCard";
import LinksCard from "./components/LinksCard";
import QRModal from "./components/QRModal";

function App() {
  const [generatedURLs, setGeneratedURLs] = useState([]);
  const [qrModalData, setQRModalData] = useState({
    isOpen: false,
    url: "",
  });
  const toast = useToast();

  const appFunctionalities = {
    async getShortenURL(url) {
      if (url.length <= 4) {
        this.toggleToast("error", "Error", "Invalid URL");
        return;
      }
      if (!url.startsWith("http://") || !url.startsWith("https://"))
        url = "http://" + url;

      const encodedParams = new URLSearchParams();
      encodedParams.append("url", url);

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "870264879bmsh3c991bd066d9784p186777jsne991917c9c2c",
          "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
        },
        body: encodedParams,
      };

      await fetch(
        "https://url-shortener-service.p.rapidapi.com/shorten",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.result_url) {
            this.toggleToast(
              "success",
              "Your shortened URL",
              response.result_url
            );
            const data = {
              url: url.substr(url.indexOf("//") + 2),
              shortenUrl: response.result_url,
              date: new Date(),
            };
            setGeneratedURLs([data, ...generatedURLs]);
            this.storeURL(data);
          } else {
            this.toggleToast("error", "Error", response?.error);
          }
        })
        .catch((err) => console.error(err));

      return true;
    },
    storeURL(data) {
      const prevData = JSON.parse(localStorage.getItem("history"));
      console.log(prevData);
      if (prevData) {
        localStorage.setItem("history", JSON.stringify([data, ...prevData]));
      } else {
        localStorage.setItem("history", JSON.stringify([data]));
      }
    },
    getStoredURL() {
      return JSON.parse(localStorage.getItem("history"));
    },
    getGeneratedURLs() {
      return generatedURLs;
    },
    toggleToast(type = "success", title, msg) {
      toast({
        position: "top",
        title: title,
        description: msg,
        status: type,
        duration: 9000,
        isClosable: true,
      });
    },
    toggleQRModal(url, state = true) {
      setQRModalData({
        isOpen: state,
        url: url,
      });
    },
  };

  useEffect(() => {
    setGeneratedURLs(appFunctionalities.getStoredURL());
  }, []);

  return (
    <Box minHeight="100vh" py="4" bg="primary">
      <Container height="100%" width="95%" marginX="auto" maxWidth="6xl">
        <Grid height="100%" className="grid-template" gap="14">
          <Header />
          <InputCard appFunctionalities={appFunctionalities} />
          <LinksCard appFunctionalities={appFunctionalities} />
        </Grid>
      </Container>
      {qrModalData.isOpen && (
        <QRModal
          toggleQRModal={appFunctionalities.toggleQRModal}
          url={qrModalData.url}
        />
      )}
    </Box>
  );
}

export default App;

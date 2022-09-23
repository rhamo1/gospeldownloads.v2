import { Center, Image, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import sound from "../../media/gospel.mp3";
import gospel from "../../media/pics/gospel.png";
import gif from "../../media/gspl.gif";



export const Home = () => {
  const [play] = useSound(sound);
  const history = useHistory();

  return (
    <Center
      border={"14px"}
      borderColor="black"
      flexDirection={"column"}
      height="100%"
      alignItems={"center"}
      justifyContent={"center"}
    >

      <Image margin={"8px"} maxWidth={"30%"} src={gospel} />

      <Image margin={"3px"} marginBottom={"10px"} maxWidth={"60%"} src={gif} />

      <Stack>
        <Button
          padding={"10px"}
          variant={"BlockButton"}
          onClick={() => history.push("/fodase")}
        >
          margin={"20px"}
        </Button>
        <Button padding={"15px"} onClick={() => play(sound)}>
          gospel
        </Button>
        <Button padding={"15px"} onClick={() => history.push("/canvas")}>
          canvas
        </Button>
        <Button padding={"15px"} onClick={() => history.push("/radiogospel")}>
          radiogospel
        </Button>
      </Stack>

      <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>

        <h3>® GOSPELDOWNLOADS 2022 ®</h3>

      </Stack>
    </Center>
  );
};

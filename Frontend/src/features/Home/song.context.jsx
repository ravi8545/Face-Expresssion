import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState({
    url: "https://ik.imagekit.io/lveg9f2wv/cohort-2/moodify/songs/Pushpa_Pushpa__From__Pushpa_2_The_Rule____-_Hindi__DownloadMing.WS__NP9SlVako.mp3",
    posterUrl: "https://ik.imagekit.io/lveg9f2wv/cohort-2/moodify/posters/Pushpa_Pushpa__From__Pushpa_2_The_Rule____-_Hindi__DownloadMing.WS__9EOyHhUUpk.jpeg",
    title: 'Pushpa Pushpa (From "Pushpa 2 The Rule") - Hindi',
    mood: "happy",
    __v: 0
  });

  const [loading, setLoading] = useState(false);

  return (
    <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
      {children}
    </SongContext.Provider>
  );
};
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import WeddingCeremonyAudio from "./pages/WeddingCeremonyAudio";
import WeddingAudioWithoutDJ from "./pages/WeddingAudioWithoutDJ";
import OutdoorWeddingAudio from "./pages/OutdoorWeddingAudio";
import Packages from "./pages/Packages";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import ResourcesHub from "./pages/ResourcesHub";
import CeremonyAudioChecklist from "./pages/resources/CeremonyAudioChecklist";
import HowToHaveWeddingMusicWithoutDJ from "./pages/resources/HowToHaveWeddingMusicWithoutDJ";
import HowManyMicrophones from "./pages/resources/HowManyMicrophones";
import BluetoothSpeaker from "./pages/resources/BluetoothSpeaker";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="wedding-ceremony-audio" element={<WeddingCeremonyAudio />} />
        <Route path="wedding-audio-without-a-dj" element={<WeddingAudioWithoutDJ />} />
        <Route path="outdoor-wedding-audio" element={<OutdoorWeddingAudio />} />
        <Route path="packages" element={<Packages />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="resources" element={<ResourcesHub />} />
        <Route
          path="resources/wedding-ceremony-audio-checklist"
          element={<CeremonyAudioChecklist />}
        />
        <Route
          path="resources/how-to-have-wedding-music-without-a-dj"
          element={<HowToHaveWeddingMusicWithoutDJ />}
        />
        <Route
          path="resources/how-many-microphones-does-a-wedding-ceremony-need"
          element={<HowManyMicrophones />}
        />
        <Route
          path="resources/can-you-use-a-bluetooth-speaker-for-a-wedding"
          element={<BluetoothSpeaker />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

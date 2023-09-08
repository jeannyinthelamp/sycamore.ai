import React from "react";
import Onboarding_header from "../../Components/ButtonSmall/Onboarding_header/Onboarding_header";
import Onboarding_nav from "../../Components/ButtonSmall/Onboarding_nav/Onboarding_nav";
import Onboarding_progress_bar from "../../Components/ButtonSmall/Onboarding_progress_bar/Onboarding_progress_bar";

export default function Onboarding_5() {
  return (
    <div>
      Onboarding_5
      <Onboarding_header />
      <Onboarding_nav />
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      {/* set container div to position relative so progress bar can be positioned correctly */}
      <Onboarding_progress_bar active='page5' />
    </div>
  );
}

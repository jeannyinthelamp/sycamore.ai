import React from "react";
import Onboarding_header from "../../Components/ButtonSmall/Onboarding_header/Onboarding_header";
import Onboarding_nav from "../../Components/ButtonSmall/Onboarding_nav/Onboarding_nav";
import Onboarding_progress_bar from "../../Components/ButtonSmall/Onboarding_progress_bar/Onboarding_progress_bar";

export default function Onboarding_3() {
  return (
    <div>
      Onboarding_3
      <Onboarding_header />
      <Onboarding_nav />
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page3' />
    </div>
  );
}

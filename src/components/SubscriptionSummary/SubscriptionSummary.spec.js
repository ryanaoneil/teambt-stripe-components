import React from "react";

import * as RTL from "@testing-library/react";

import SubscriptionSummary from "./SubscriptionSummary";



describe("Subscription Summary tests", () => {

  test("render", () => {

    RTL.render(

      <SubscriptionSummary title="Test" monthlyPrice={43} yearlyPrice={323} />

    );

  });

});
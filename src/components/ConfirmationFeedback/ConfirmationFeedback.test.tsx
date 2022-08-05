import TestRenderer from "react-test-renderer";
import ConfirmationFeedback from "./ConfirmationFeedback";

describe("Given a ConfirmationFeedback component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the ConfirmationFeedback component", () => {
      const expectedConfirmation = TestRenderer.create(
        <ConfirmationFeedback />
      );
      expect(expectedConfirmation).toMatchSnapshot();
    });
  });
});

import TestRenderer from "react-test-renderer";
import Toaster from "./Toaster";

describe("Given a Toaster component", () => {
  describe("When it's rendered and recieves 'memeCreated'", () => {
    test("Then it should show a Toaster component with the 'created' conditional render", () => {
      const create = "memeCreated";

      const expectedToaster = TestRenderer.create(<Toaster status={create} />);
      expect(expectedToaster).toMatchSnapshot();
    });
  });
  describe("When it's rendered and recieves `memeDeleted`", () => {
    test("Then it should show a Toaster component with the 'deleted' conditional render", () => {
      const create = "memeDeleted";

      const expectedToaster = TestRenderer.create(<Toaster status={create} />);
      expect(expectedToaster).toMatchSnapshot();
    });
  });
});

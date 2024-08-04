jest.mock("webextension-polyfill", () => ({
  runtime: {
    getURL: jest.fn(),
  },
}));

// eslint-disable-next-line import/first
import { runtime } from "webextension-polyfill";
// eslint-disable-next-line import/first
import { changeImagesToPepe } from "./changeImages";

describe("updateImagesToPepe", () => {
  beforeEach(() => {
    const mockGetURL = runtime.getURL as jest.MockedFunction<
      typeof runtime.getURL
    >;
    mockGetURL.mockReturnValue("ext://pepe.jpg");
  });

  it("should change src to pepe for non-pepe images", () => {
    const image = new Image();
    image.src = "http://website/imagetochange.jpg";

    changeImagesToPepe([image]);

    expect(image.src).toEqual("ext://pepe.jpg");
  });

  it("should not change src when already a pepe image", () => {
    const image = new Image();
    image.src = "http://website/pepe.jpg";

    changeImagesToPepe([image]);

    expect(image.src).toEqual("http://website/pepe.jpg");
  });

  it("should not change src when already a pepe image with uppercase filename", () => {
    const image = new Image();
    image.src = "http://website/PEPE.jpg";

    changeImagesToPepe([image]);

    expect(image.src).toEqual("http://website/PEPE.jpg");
  });
});

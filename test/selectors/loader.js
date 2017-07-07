import {Selector} from "testcafe";

const loader = Selector(".loader").addCustomDOMProperties({
  isLoaded: el => !el.classList.contains("loading")
});

export default loader;
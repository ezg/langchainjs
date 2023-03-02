import { test } from "@jest/globals";
import { UnstructuredBaseDocumentLoader } from "../unstructured.js";

test("Test Unstructured base loader", async () => {
  const loader = new UnstructuredBaseDocumentLoader(
    "http://localhost:8000/general/v0.0.4/general",
    "/Users/mrobinson/repos/unstructured/example-docs/fake.docx",
  );
  await loader.load();
});
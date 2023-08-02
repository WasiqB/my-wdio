suite("webdriver.io page", () => {
  test("should have the right title", async () => {
    await browser.url("/");
    const title = await browser.getTitle();
    expect(title).to.equal("My Store");
  });
});

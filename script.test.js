describe("Form Validation", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <form id="registrationForm">
                <input type="text" id="username" value="">
                <input type="email" id="email" value="">
                <input type="password" id="password" value="">
                <input type="password" id="confirmPassword" value="">
                <div id="message"></div>
            </form>
        `;
    require("./script.js");
  });

  test("should validate username length", () => {
    const username = document.getElementById("username");
    username.value = "ab";
    const result = validateForm(
      username.value,
      "test@test.com",
      "password123",
      "password123"
    );
    expect(result).toBe(false);
  });

  test("should validate email format", () => {
    const email = document.getElementById("email");
    email.value = "invalid-email";
    const result = validateForm(
      "username",
      email.value,
      "password123",
      "password123"
    );
    expect(result).toBe(false);
  });

  test("should validate password length", () => {
    const password = document.getElementById("password");
    password.value = "12345";
    const result = validateForm(
      "username",
      "test@test.com",
      password.value,
      password.value
    );
    expect(result).toBe(false);
  });

  test("should validate password match", () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    password.value = "password123";
    confirmPassword.value = "password456";
    const result = validateForm(
      "username",
      "test@test.com",
      password.value,
      confirmPassword.value
    );
    expect(result).toBe(false);
  });

  test("should accept valid form data", () => {
    const result = validateForm(
      "username",
      "test@test.com",
      "password123",
      "password123"
    );
    expect(result).toBe(true);
  });
});

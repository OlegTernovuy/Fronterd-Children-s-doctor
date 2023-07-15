import { authSlice, logout } from "./authSlice";

describe("LogOut", () => {
  test("logout", () => {
    expect(
      authSlice(
        {
          user: {username: "admin", id: "636fd939c8800fbf53428d95", role: "admin"},
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmZkOTM5Yzg4MDBmYmY1MzQyOGQ5NSIsImlhdCI6MTY4NjE2MzI1MSwiZXhwIjoxNjg4NzU1MjUxfQ.UTGVCbXMZFCAjLNIAnujJ3yURJNhMni_BsYMsdDQxbM",
          isLoading: false,
          status: "success",
          role: "admin",
        },
        logout()
      )
    ).toEqual({
        user: null,
        token: null,
        isLoading: false,
        status: null,
        role: null,
      });
  });
});

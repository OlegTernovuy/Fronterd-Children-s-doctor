
import { render, screen, fireEvent } from "@testing-library/react";
import { AddVac } from "./AddVac";
import axios from "axios";
import React from "react";

jest.mock("axios");

describe("VACS TEST", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          _id: "6384bd54abc2b04c1b9d72e9",
          title: "Інфлувак",
          price: 670,
          __v: 0,
        },
        {
          _id: "6384bd69abc2b04c1b9d72f2",
          title: "Ротатек",
          price: 1100,
          __v: 0,
        },
        {
          _id: "6384bd8aabc2b04c1b9d72f8",
          title: "Гардасил",
          price: 4800,
          __v: 0,
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders learn react link", async () => {
    axios.get.mockReturnValue(response);
    render(<AddVac />);
    const users = await screen.findAllByTestId("vacList");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });
});

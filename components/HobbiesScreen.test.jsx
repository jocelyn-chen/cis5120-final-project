import { render, screen, fireEvent } from "@testing-library/react";
import HobbiesScreen from "./HobbiesScreen";

describe("HobbiesScreen", () => {
  it("renders the main components", () => {
    render(<HobbiesScreen />);

    expect(screen.getByText("hobbit")).toBeInTheDocument();
    expect(screen.getByText("My Hobbies")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });

  it("renders all initial hobbies", () => {
    render(<HobbiesScreen />);

    expect(screen.getByText("Sewing")).toBeInTheDocument();
    expect(screen.getByText("Baking")).toBeInTheDocument();
    expect(screen.getByText("Photography")).toBeInTheDocument();
  });

  it("shows correct progress percentages", () => {
    render(<HobbiesScreen />);

    expect(screen.getByText("75")).toBeInTheDocument();
    expect(screen.getByText("45")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
  });

  it("navigates to add hobby page when clicking the add button", () => {
    const { container } = render(<HobbiesScreen />);

    const addButton = container.querySelector("button:last-child");
    fireEvent.click(addButton);

    // Since we're using window.location.href, we need to mock it
    expect(window.location.href).toBe("/add-hobby");
  });
});

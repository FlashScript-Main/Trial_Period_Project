export const checkIcon = (category: string) => {
    switch (category) {
    case "education":
        return "GraduationCap";
    case "entertainment":
        return "TvMinimalPlay";
    case "fashion":
        return "Drama";
    case "food":
        return "Pizza";
    case "game":
        return "Gamepad2";
    case "health":
        return "Cross";
    case "sports":
        return "Trophy";
    case "technology":
        return "Cpu";
    case "travel":
        return "Plane";
    default:
        return "Plane";
    }
}

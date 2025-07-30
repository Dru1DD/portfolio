
const CSS_DEFAULTS = {
    '--scenePerspectiveOriginX': 50,
    '--scenePerspectiveOriginY': 30,
    '--itemZ': 2,
    '--scenePerspective': 1,
    '--cameraSpeed': 150,
    '--cameraZ': 0,
    '--viewportHeight': 0,
};

export const getCSSVariables = (name: string, fallback?: number): number => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name);
    const parsed = parseFloat(value);

    if (isNaN(parsed)) {
        return fallback ?? CSS_DEFAULTS[name as keyof typeof CSS_DEFAULTS] ?? 0;
    }

    return parsed;
};

export const setCSSVariables = (name: string, value: number) => {
    document.documentElement.style.setProperty(name, value.toString());
};


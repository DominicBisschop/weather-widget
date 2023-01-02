import {WidgetInterface} from "@dashboard-platform/widget-interface";
import {Settings} from "./widget/settings";
import {WeatherWidget} from "./widget/WeatherWidget";
import {WeatherWidgetSettings} from "./widget/WeatherWidgetSettings";

export const Weather: WidgetInterface<Settings> = {
    id: "weather_widget",
    name: "Weather Widget",
    version: " 0.1",
    render: WeatherWidget,
    settingsRender: WeatherWidgetSettings,
};
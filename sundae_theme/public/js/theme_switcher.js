frappe.provide("frappe.ui");

frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    constructor() {
        super()
    }

    fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "light",
					label:("Frappe Light"),
					info:("Light Theme"),
				},
				{
					name: "dark",
					label:"Timeless Night",
					info:"Dark Theme",
				},
				{
					name: "automatic",
					label:"Automatic",
					info:"Uses system's theme to switch between light and dark mode",
				},
                {
                    name:"cotton_candy",
                    label: "Cotton Candy",
                    info: "Cotton Candy"
                },
                {
                    name:"cherry",
                    label: "Cherry",
                    info: "Cherry Theme"
                },
                {
                    name:"watermelon",
                    label: "Watermelon",
                    info: "Watermelon Theme"
                },
                {
                    name:"blue",
                    label: "Blue",
                    info: "Blue Theme"
                },
                {
                    name:"green",
                    label: "Green",
                    info: "Green Theme"
                }
			];

			resolve(this.themes);
		});
	}
}

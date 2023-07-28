export default class EventHub {
	// register all handlers to the events they are interested in

	// search for all ".handler.ts" files in the events folder
	// for each file, import it and execute the constructor to register it to the event it listens to
	public static async registerAllHandlers(): Promise<void> {
		const normalizedPath = require("path").join(__dirname, "");
		require("fs").readdirSync(normalizedPath).forEach(async (file: string) => {
			if (file.endsWith(".handler.ts")) {
				const handler = await require(`./${file}`).default;
				new handler();
			}
		});
	}
}
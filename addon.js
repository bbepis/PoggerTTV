class PoggerTTV extends FrankerFaceZ.utilities.addon.Addon
{
	constructor(...args) {
		super(...args);
		
		this.inject("chat");
		this.inject("chat.emotes");
        
		this._id = "addon--pttv.poggerttv";
		this._id_global_emotes = "addon--pttv.poggerttv--emotes-global";
	}
	
	async onLoad() {
		
	}

	onEnable() {

		const allEmotes = [
			{ ffzId: "262468", name: "WeirdChamp" },
			{ ffzId: "256055", name: "PogU" },
			{ ffzId: "465131", name: "PogChamp" },
			{ ffzId: "130077", name: "ZULUL" },
			{ ffzId: "249060", name: "forsenCD" },
			{ ffzId: "211702", name: "HONEYDETECTED" },
			{ ffzId: "287489", name: "Okayga" },
			{ ffzId: "418189", name: "YEP" },
			{ bttvId: "5e32022f61ff6b51e65243df", name: "TriCatch" },
			{ bttvId: "5af84b9e766af63db43bf6b9", name: "sumSmash" },
			{ bttvId: "58ed15b922e601152c3af7d3", name: "miniHeston" },
			{ bttvId: "552d2fc2236a1aa17a996c5b", name: "miniJulia" },
		];

		this.emotes.removeDefaultSet(this._id, this._id_global_emotes);
		this.emotes.unloadSet(this._id_global_emotes);

		let emotes = [];
		
		let id = 1;

		for (let rawEmote of allEmotes)
		{
			function getUrlSize(size)
			{
				return rawEmote.ffzId
					? `https://cdn.frankerfacez.com/emoticon/${rawEmote.ffzId}/${size}`
					: `https://cdn.betterttv.net/emote/${rawEmote.bttvId}/${size == 4 ? 3 : size}x`;
			}

			let emote = {
				urls: {
					1: getUrlSize(1),
					2: getUrlSize(2),
					4: getUrlSize(4),
				},
				id: id++,
				name: rawEmote.name,
				width: 28,
				height: 28,
				owner: {
					display_name: "Bepis",
					name: "Bepis",
				},
				require_spaces: true,
				click_url: "https://www.youtube.com/watch?v=JhH1waXoHy8"
			};
	
			emotes.push(emote);
		}

		const set = {
			emoticons: emotes,
			title: "Global Emotes",
			source: "PoggerTTV",
			icon: "https://cdn.frankerfacez.com/emoticon/211702/1",
		};
		
		this.emotes.addDefaultSet(this._id, this._id_global_emotes, set);
	}

	onDisable() {
		this.emotes.removeDefaultSet(this._id, this._id_global_emotes);
	}

	async onUnload() {
		
	}
}

PoggerTTV.register("u-pttv");
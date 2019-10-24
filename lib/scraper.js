import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
	const { data: html } = await axios.get('https://stats.nba.com/');
	return html;

}

async function getFields(html) {
	// load up cheerio
	const $ = cheerio.load(html);

	const selectors = [ 
		`$('[ng-href="/game/0011900017/]')`,
	]
	
	const [ points ] = selectors;

	for (const value of selectors) {
		console.log(value);
	}

}

export { getHTML, getFields };

import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
	const { data: html } = await axios.get('http://gis.vgsi.com/PortsmouthNH/Parcel.aspx?pid=37841');
	return html;

}

async function getFields(html) {
	// load up cheerio
	const $ = cheerio.load(html);
	const span = $('#MainContent_lblLocation');
	return (span.html());
}

export { getHTML, getFields };
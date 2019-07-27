import { getHTML, getFields } from './lib/scraper';

async function go() {
	const html = await getHTML('http://gis.vgsi.com/PortsmouthNH/Parcel.aspx?pid=37841');
	const location = await getFields(html);
	console.log(location);
}

go();
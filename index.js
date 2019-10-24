import express from 'express';
import { getHTML, getFields } from './lib/scraper';

const app = express();

async function go() {
	const html = await getHTML('https://stats.nba.com');
	const location = await getFields(html);
	console.log(location);
}

app.listen(2020, () => {
	console.log('listening on 2020');
})

go();
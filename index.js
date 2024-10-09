import KickScraper from './lib/scraper.js';
import { spawn } from 'child_process';
import { countTsSegments } from './lib/utils.js';

const scraper = new KickScraper();
const masterStreamLink = await scraper.getLastStream('elzeein');
const streamLink1080p = masterStreamLink.replace(
	'master.m3u8',
	'1080p/playlist.m3u8'
);
const totalPlaylistSegments = await countTsSegments(streamLink1080p);
const totalClipCount = 10;
const clipInputs = [];

console.log('===== VOD Description =====');
console.log('Master Link: ', masterStreamLink);
console.log('Total Playlist: ', totalPlaylistSegments);

for (let index = 0; index < totalClipCount; index++) {
	const randomSegmentIndex = Math.floor(
		Math.random() * totalPlaylistSegments
	);
	const randomClipLink = streamLink1080p.replace(
		'playlist.m3u8',
		`${randomSegmentIndex}.ts`
	);

	clipInputs.push('-i');
	clipInputs.push(randomClipLink);
}

const ffmpegCommand = 'ffmpeg';
const ffmpegArgs = [
	'-y',
	'-threads',
	'0',
	'-err_detect',
	'ignore_err',
	'-ignore_unknown',
	'-protocol_whitelist',
	'file,crypto,http,tls,tcp,https',
	...clipInputs,
	'-filter_complex',
	'[0:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v0]; ' +
		'[1:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v1]; ' +
		'[2:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v2]; ' +
		'[3:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v3]; ' +
		'[4:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v4]; ' +
		'[5:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v5]; ' +
		'[6:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v6]; ' +
		'[7:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v7]; ' +
		'[8:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v8]; ' +
		'[9:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v9]; ' +
		'[10:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v10]; ' +
		'[11:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v11]; ' +
		'[12:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v12]; ' +
		'[13:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v13]; ' +
		'[14:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v14]; ' +
		'[15:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v15]; ' +
		'[16:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v16]; ' +
		'[17:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v17]; ' +
		'[18:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v18]; ' +
		'[19:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v19]; ' +
		'[v0][v1]xfade=transition=fade:duration=1:offset=4[v01]; ' +
		'[v01][v2]xfade=transition=fade:duration=1:offset=8[v02]; ' +
		'[v02][v3]xfade=transition=fade:duration=1:offset=12[v03]; ' +
		'[v03][v4]xfade=transition=fade:duration=1:offset=16[v04]; ' +
		'[v04][v5]xfade=transition=fade:duration=1:offset=20[v05]; ' +
		'[v05][v6]xfade=transition=fade:duration=1:offset=24[v06]; ' +
		'[v06][v7]xfade=transition=fade:duration=1:offset=28[v07]; ' +
		'[v07][v8]xfade=transition=fade:duration=1:offset=32[v08]; ' +
		'[v08][v9]xfade=transition=fade:duration=1:offset=36[v09]; ' +
		'[v09][v10]xfade=transition=fade:duration=1:offset=40[v10]; ' +
		'[v10][v11]xfade=transition=fade:duration=1:offset=44[v11]; ' +
		'[v11][v12]xfade=transition=fade:duration=1:offset=48[v12]; ' +
		'[v12][v13]xfade=transition=fade:duration=1:offset=52[v13]; ' +
		'[v13][v14]xfade=transition=fade:duration=1:offset=56[v14]; ' +
		'[v14][v15]xfade=transition=fade:duration=1:offset=60[v15]; ' +
		'[v15][v16]xfade=transition=fade:duration=1:offset=64[v16]; ' +
		'[v16][v17]xfade=transition=fade:duration=1:offset=68[v17]; ' +
		'[v17][v18]xfade=transition=fade:duration=1:offset=72[v18]; ' +
		'[v18][v19]xfade=transition=fade:duration=1:offset=76[outv]',
	'-map',
	'[outv]',
	'-an',
	'outro.mp4',
];

const ffmpegArgs2 = [
	'-y',
	'-threads',
	'0',
	'-err_detect',
	'ignore_err',
	'-ignore_unknown',
	'-protocol_whitelist',
	'file,crypto,http,tls,tcp,https',
	...clipInputs,
	'-filter_complex',
	'[0:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v0]; ' +
		'[1:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v1]; ' +
		'[2:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v2]; ' +
		'[3:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v3]; ' +
		'[4:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v4]; ' +
		'[5:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v5]; ' +
		'[6:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v6]; ' +
		'[7:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v7]; ' +
		'[8:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v8]; ' +
		'[9:v]trim=start=3:end=8,setpts=PTS-STARTPTS[v9]; ' +
		'[v0][v1]xfade=transition=fade:duration=1:offset=4[v01]; ' +
		'[v01][v2]xfade=transition=fade:duration=1:offset=8[v02]; ' +
		'[v02][v3]xfade=transition=fade:duration=1:offset=12[v03]; ' +
		'[v03][v4]xfade=transition=fade:duration=1:offset=16[v04]; ' +
		'[v04][v5]xfade=transition=fade:duration=1:offset=20[v05]; ' +
		'[v05][v6]xfade=transition=fade:duration=1:offset=24[v06]; ' +
		'[v06][v7]xfade=transition=fade:duration=1:offset=28[v07]; ' +
		'[v07][v8]xfade=transition=fade:duration=1:offset=32[v08]; ' +
		'[v08][v9]xfade=transition=fade:duration=1:offset=36[outv]',
	'-map',
	'[outv]',
	'-an',
	'outro.mp4',
];

console.time('Duration');
const outroProcess = spawn(ffmpegCommand, ffmpegArgs2);

outroProcess.stdout.on('data', (data) => {
	const output = data.toString();
	console.log(output);
});

outroProcess.stderr.on('data', (data) => {
	const errorOutput = data.toString();
	console.error(errorOutput);
});

outroProcess.on('close', (code) => {
	console.timeEnd('Duration');
	console.log(`FFmpeg finalizado con código ${code}`);
});

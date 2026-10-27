# DigiKidult D-3 021 guide

Static responsive guide for US D-3 ver.1. Open index.html directly; no build, account, API key or install is needed. All images, scripts and styles are local. Only the four visible workbook tabs are included.

## GitHub Pages

1. Extract this ZIP and upload the contents of d3-guide to the root of a GitHub repository (including .nojekyll).
2. In repository Settings → Pages, select Deploy from a branch, your main branch, and / (root), then Save.
3. Visit the URL GitHub reports after deployment completes. Relative links support repository subpaths.

The site has partner search, evolution filters, expandable enemy lists, a POW reference, the DigiKidult social bar and the visible source archive. It works offline after extraction. External social and source links need internet access.

## Source and limitations

Source: https://docs.google.com/spreadsheets/d/1Km1Ipmse2ifw7Xj_ot6t51uHTmq6Jw9cmnZFpdLgxF0/edit

Workbook identifies itself as US D-3 ver.1 (021), by DigiKidult, last update 7 June 2024. Inspected 26 October 2026. source-data.json contains every nonempty cell and embedded image placement from the four visible tabs. Hidden tabs are excluded at the user's request.

The armor POW/AP table is explicitly unfinished. Blank data is not inferred. Original names and spelling remain. The Ver.WS web reference could not be located; this is an original retro card-grid design, not a verified match. The WhatsApp invite uses the workbook's hyperlink, which differs from its displayed text, and may expire. Images and guide text remain credited to their original owners. No new redistribution license is asserted.

## Future updates

Keep the supplied release-manifest.json with this release. Future change-only ZIPs should compare SHA-256 file hashes to this manifest, include only modified/new site files and a deletion list when needed, and preserve paths relative to this directory. Overlay those files on the existing deployment. This first ZIP is the complete release.

## 1.1 更新
加入六個分頁及繁體中文／English 切換，預設繁體中文，記住語言選擇。玩法說明預設收起；原始資料保留原文。將更新 ZIP 內檔案覆蓋至原網站根目錄即可。


## 1.2 進化路線更新
以六位夥伴分別顯示完整常規進化箭頭與 DP／解鎖條件，裝甲進化另列分支。預設顯示 V仔獸，可選其他夥伴或全部；搜尋會顯示整條路線，階段選項只標示形態，不截斷路線。蟲蟲獸的裝甲形態未列於可見來源，故沒有補填。


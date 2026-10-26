const search=document.querySelector('#partner-search'),stage=document.querySelector('#stage'),cards=[...document.querySelectorAll('.partners .card')];
function filter(){const q=search.value.trim().toLocaleLowerCase();let n=0;for(const c of cards){const show=(!stage.value||c.dataset.stage===stage.value)&&c.textContent.toLocaleLowerCase().includes(q);c.hidden=!show;if(show)n++;}document.querySelector('#count').textContent=(document.documentElement.lang === 'zh-Hant' ? `顯示 ${n}／${cards.length} 種形態` : `${n} of ${cards.length} forms`);document.querySelector('#empty').hidden=n!==0;}
search.addEventListener('input',filter);stage.addEventListener('change',filter);document.querySelector('#reset').addEventListener('click',()=>{search.value='';stage.value='';filter();search.focus();});filter();


document.addEventListener('languagechange',filter);

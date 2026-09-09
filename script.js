const intro=document.getElementById('intro');
const auth=document.getElementById('auth');
const app=document.getElementById('app');
const toast=document.getElementById('toast');
const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const modalOverline=document.getElementById('modalOverline');
const modalBody=document.getElementById('modalBody');
let introTimer;
let phaseTimers=[];

function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)}
function clearIntroPhases(){phaseTimers.forEach(clearTimeout);phaseTimers=[];clearTimeout(introTimer)}
function enterLogin(skip=false){clearIntroPhases();if(skip){intro.classList.add('exit');setTimeout(()=>{intro.classList.add('hidden');auth.classList.remove('hidden');document.body.classList.add('auth-active')},450);return}intro.classList.add('exit');setTimeout(()=>{intro.classList.add('hidden');auth.classList.remove('hidden');document.body.classList.add('auth-active')},650)}
function runIntro(){
  clearIntroPhases();
  let walker=document.querySelector('.walker');
  const wordmark=document.querySelector('.intro-wordmark');
  const copy=document.querySelector('.intro-copy');
  let light=document.querySelector('.briefcase-light');
  if(!light){light=document.createElement('span');light.className='briefcase-light';intro.appendChild(light)}
  intro.classList.remove('exit','flash-on');
  walker.classList.remove('briefcase-open');wordmark.classList.remove('on');copy.classList.remove('on');
  phaseTimers.push(setTimeout(()=>walker.classList.add('briefcase-open'),7900));
  phaseTimers.push(setTimeout(()=>intro.classList.add('flash-on'),9600));
  phaseTimers.push(setTimeout(()=>{wordmark.classList.add('on');copy.classList.add('on')},10800));
  introTimer=setTimeout(()=>enterLogin(),17000);
}
function enterApp(){auth.classList.add('hidden');app.classList.remove('hidden');document.body.classList.remove('auth-active');showToast('Welcome to your VIERO workspace.')}
function openModal(overline,title,body){modalOverline.textContent=overline;modalTitle.textContent=title;modalBody.innerHTML=body;modal.classList.remove('hidden');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.add('hidden');document.body.style.overflow=''}
function row(title,text,tag=''){return `<div class="intel-row"><strong>${title}</strong><span>${text}</span>${tag?`<div class="confidence-label">${tag}</div>`:''}</div>`}

runIntro();
document.getElementById('skipIntro').addEventListener('click',()=>enterLogin(true));
document.getElementById('togglePassword').addEventListener('click',()=>{const input=document.getElementById('password');const button=document.getElementById('togglePassword');input.type=input.type==='password'?'text':'password';button.textContent=input.type==='password'?'Show':'Hide'});
document.getElementById('loginForm').addEventListener('submit',event=>{event.preventDefault();enterApp()});
document.getElementById('createAccount').addEventListener('click',()=>showToast('Business account setup will connect to secure authentication.'));
document.getElementById('forgotPassword').addEventListener('click',event=>{event.preventDefault();showToast('Password recovery will connect to the authentication service.')});
document.getElementById('logout').addEventListener('click',()=>{app.classList.add('hidden');auth.classList.remove('hidden');document.getElementById('loginForm').reset();showToast('Signed out.')});
document.getElementById('addData').addEventListener('click',()=>openModal('GET STARTED','Bring your business into VIERO',`<p class="modal-note">Start with real records. VIERO will not manufacture numbers or insights for an empty business.</p><div class="modal-content-grid">${row('Record a sale','Capture your first transaction and begin the business history.')} ${row('Create a customer','Build the customer record used by sales, invoices and receivables.')} ${row('Add a product','Define products before inventory and profitability analysis.')} ${row('Import data','Bring existing records into VIERO and validate them before import.')}</div><button class="modal-action" data-close>Close</button>`));
document.getElementById('bottleneckBtn').addEventListener('click',()=>openModal('FIND THE BOTTLENECK','No bottleneck yet',`<p class="modal-note">A bottleneck should only be identified when VIERO has enough real business evidence to support the conclusion.</p><ul class="modal-list"><li>Sales performance</li><li>Inventory availability</li><li>Customer payment behaviour</li><li>Operating expenses</li><li>Supplier and purchasing patterns</li></ul><button class="modal-action" data-close>Understood</button>`));
document.getElementById('confidenceBtn').addEventListener('click',()=>openModal('CONFIDENCE CALIBRATION','How VIERO earns confidence',`<div class="modal-content-grid">${row('FACT','Directly supported by recorded business data.','FACT')} ${row('ANALYSIS','A conclusion derived from available evidence.','ANALYSIS')} ${row('FORECAST','A prediction about a future outcome; never presented as certain.','FORECAST')} ${row('RECOMMENDATION','A suggested action based on the available evidence.','RECOMMENDATION')}</div><p class="modal-note" style="margin-top:14px">Confidence should increase when data is sufficient, consistent and recent. With no business records, VIERO reports insufficient data instead of inventing certainty.</p><button class="modal-action" data-close>Close</button>`));
document.getElementById('missingBtn').addEventListener('click',()=>openModal('MISSING INFORMATION','Check before you decide',`<p class="modal-note">There are currently no business records to compare. Once data is entered, VIERO can identify missing, incomplete, inconsistent or outdated information.</p><div class="modal-content-grid" style="margin-top:15px">${row('Critical','Information that could materially change a decision.')} ${row('Important','Information that affects analysis but does not necessarily block it.')} ${row('Recommended','Information that improves accuracy or context.')}</div><button class="modal-action" data-close>Close</button>`));
document.getElementById('learnWatch').addEventListener('click',()=>openModal('VIERO WATCH','Watch → Explain → Act',`<p class="modal-note">VIERO Watch is designed to surface meaningful changes, not flood the owner with notifications.</p><div class="flow"><span>WATCH</span><b>→</b><span>EXPLAIN</span><b>→</b><span>ACT</span></div><p class="modal-note" style="margin-top:18px">Examples include unusual expense movement, falling sales, low inventory, growing receivables and unexpected profitability changes.</p><button class="modal-action" data-close>Close</button>`));
document.getElementById('searchBtn').addEventListener('click',()=>showToast('Search will cover your authorized business records.'));
document.getElementById('periodSelect').addEventListener('change',event=>showToast(`${event.target.value} view selected. Add real data to populate momentum.`));
document.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>showToast(`${button.textContent.trim()} will open when the business workspace is connected.`)));
document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>{const type=button.dataset.open;if(type==='decision')openModal('DECISION ROOM','Make a decision with evidence',`<p class="modal-note">VIERO Decision Room is designed to structure a real business decision around evidence, options, risks, assumptions and expected outcomes.</p><div class="modal-content-grid" style="margin-top:15px">${row('Situation','Define the decision that needs to be made.')} ${row('Evidence','Separate recorded facts from assumptions.')} ${row('Options','Compare realistic courses of action.')} ${row('What-If','Test how assumptions could affect the business.')} ${row('Decision Memory','Save the expected outcome so VIERO can later compare it with reality.')}</div><button class="modal-action" data-close>Close</button>`);else openModal('VIERO AI','Ask the business',`<p class="modal-note">VIERO AI should answer using authorized business information and clearly distinguish facts, analysis, forecasts and recommendations.</p><div class="intel-row" style="margin-top:15px"><strong>Try asking:</strong><span>Why did sales change? What is my biggest bottleneck? What information am I missing? What should I investigate?</span></div><button class="modal-action" data-close>Close</button>`)}));
modal.addEventListener('click',event=>{if(event.target.closest('[data-close]'))closeModal()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal()});
window.addEventListener('load',()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){clearIntroPhases();intro.classList.add('hidden');auth.classList.remove('hidden')}});

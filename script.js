const intro=document.getElementById('intro');const auth=document.getElementById('auth');const app=document.getElementById('app');const toast=document.getElementById('toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)}
function enterLogin(){intro.classList.add('hidden');auth.classList.remove('hidden')}
function enterApp(){auth.classList.add('hidden');app.classList.remove('hidden');showToast('Welcome to your VIERO workspace.')}
setTimeout(enterLogin,15500);document.getElementById('skipIntro').addEventListener('click',enterLogin);
document.getElementById('togglePassword').addEventListener('click',()=>{const input=document.getElementById('password');const button=document.getElementById('togglePassword');input.type=input.type==='password'?'text':'password';button.textContent=input.type==='password'?'Show':'Hide'});
document.getElementById('loginForm').addEventListener('submit',event=>{event.preventDefault();enterApp()});
document.getElementById('createAccount').addEventListener('click',()=>showToast('Business account setup will be connected to authentication next.'));
document.getElementById('logout').addEventListener('click',()=>{app.classList.add('hidden');auth.classList.remove('hidden');document.getElementById('loginForm').reset();showToast('Signed out.')});
document.getElementById('addData').addEventListener('click',()=>showToast('Start by recording a sale, customer, product or expense.'));
document.getElementById('bottleneckBtn').addEventListener('click',()=>showToast('No bottleneck can be determined yet — VIERO needs real business data.'));
document.getElementById('missingBtn').addEventListener('click',()=>showToast('No missing information detected yet — your workspace has no business records.'));
document.getElementById('learnWatch').addEventListener('click',()=>showToast('VIERO Watch will monitor meaningful business changes as data arrives.'));
window.addEventListener('load',()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setTimeout(enterLogin,1200)}});

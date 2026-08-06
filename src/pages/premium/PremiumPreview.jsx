import React from "react";

import logoConilon from "../../assets/logo-conilon.jpg.jpeg";
import mascoteAlegre from "../../assets/mascotes/mascote_alegre.png";
import mascoteObservando from "../../assets/mascotes/mascote_observando.png";
import mascotePensando from "../../assets/mascotes/mascote_pensando.png";
import evidenciaElnino from "../../assets/evidencias/elnino-florada.png";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT538JtTs5njlBOQ9W_zW94-MBB84BBIVwteDGctFQDD2RQC_bUdSkYbyeAq1N-R2uGZsVsIIIuH0CN/pub?gid=863354306&single=true&output=csv";

const premiumCss = `
:root{
  --bg:#07140e;
  --s1:#10231a;
  --s2:#153123;
  --s3:#0c1d14;
  --line:#2c4938;
  --text:#f5f4ee;
  --muted:#b8c3bb;
  --green:#78d592;
  --premium:#d7c18a;
  --danger:#f3a1a1;
  --warning:#eadb78;
}
*{box-sizing:border-box}
html,body,#root{
  width:100%;
  min-width:0;
  min-height:100%;
  margin:0;
  padding:0;
  overflow-x:hidden;
  background:var(--bg);
}
body{
  display:block!important;
  place-items:initial!important;
  color:var(--text);
  font-family:Inter,"Segoe UI",system-ui,sans-serif;
  text-align:left!important;
  background:radial-gradient(circle at 80% 0,#173322 0,transparent 28%),var(--bg);
}
#root{
  display:block!important;
  width:100%!important;
  min-width:0!important;
  max-width:none!important;
  margin:0!important;
  padding:0!important;
  text-align:left!important;
  overflow-x:hidden!important;
}
button,input,select{font:inherit}
button{cursor:pointer}
img{display:block;max-width:100%}
h1,h2,h3,p,strong,span,label,small,a,button{color:inherit}

.labp-header{
  position:sticky;
  top:0;
  z-index:30;
  height:72px;
  display:flex;
  align-items:center;
  gap:18px;
  padding:0 max(20px,calc((100vw - 1180px)/2));
  background:#07140ef2;
  border-bottom:1px solid rgba(215,193,138,.2);
  backdrop-filter:blur(18px);
}
.labp-brand{
  display:flex;
  align-items:center;
  gap:11px;
  border:0;
  background:none;
}
.labp-brand img{
  width:42px;
  height:42px;
  border-radius:13px;
  object-fit:cover;
  border:1px solid rgba(215,193,138,.28);
}
.labp-brand strong{font-size:18px}
.labp-brand small{
  display:block;
  margin-top:2px;
  color:var(--premium);
  font-size:9px;
  font-weight:900;
  letter-spacing:.11em;
}
.labp-nav{
  display:flex;
  gap:4px;
  margin:auto;
}
.labp-nav button,
.labp-round{
  border:0;
  border-radius:12px;
  background:transparent;
  color:var(--muted);
  padding:10px 13px;
}
.labp-nav .active{
  background:var(--s2);
  color:var(--text);
}
.labp-date{
  display:grid;
  text-align:right;
}
.labp-date strong{font-size:12px}
.labp-date span{font-size:10px;color:var(--muted)}
.labp-round{
  width:44px;
  height:44px;
  padding:0;
  border:1px solid var(--line);
  color:var(--text);
  font-size:21px;
}

.labp-page{
  width:min(1180px,calc(100% - 32px));
  margin:auto;
  padding:26px 0 110px;
}
.labp-home{display:grid;gap:18px}

.labp-hero{
  display:grid;
  grid-template-columns:minmax(0,1.12fr) minmax(280px,.88fr);
  gap:20px;
  align-items:stretch;
  padding:26px;
  border:1px solid #6f6445;
  border-radius:26px;
  background:linear-gradient(145deg,#263527,#102119);
  overflow:hidden;
}
.labp-eyebrow{
  font-size:11px;
  font-weight:900;
  letter-spacing:.11em;
  color:var(--premium);
}
.labp-hero h1{
  margin:8px 0 7px;
  font-size:clamp(40px,7vw,68px);
  line-height:1;
  color:var(--text);
}
.labp-hero p,
.labp-page-head p{
  margin:0;
  color:var(--muted);
  line-height:1.65;
}
.labp-update{
  display:inline-flex;
  margin-top:13px;
  padding:7px 10px;
  border:1px solid rgba(215,193,138,.24);
  border-radius:999px;
  background:rgba(215,193,138,.08);
  color:var(--premium);
  font-size:11px;
  font-weight:850;
}
.labp-mini-grid{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:8px;
  margin-top:19px;
}
.labp-mini-grid div{
  min-width:0;
  padding:15px;
  border:1px solid var(--line);
  border-radius:16px;
  background:var(--s3);
}
.labp-mini-grid span,
.labp-mini-grid strong{display:block}
.labp-mini-grid span{
  color:var(--muted);
  font-size:10px;
}
.labp-mini-grid strong{
  margin-top:7px;
  color:var(--text);
  font-size:17px;
  overflow-wrap:anywhere;
}

.labp-hero-mascot{
  display:grid;
  grid-template-rows:minmax(0,1fr) auto;
  min-height:300px;
  border:1px solid rgba(215,193,138,.2);
  border-radius:22px;
  background:radial-gradient(circle at 50% 24%,rgba(215,193,138,.14),transparent 57%),#0d1e15;
  overflow:hidden;
}
.labp-hero-mascot img{
  width:100%;
  max-height:238px;
  object-fit:contain;
  align-self:end;
}
@keyframes labpMascotFloat{
  0%,100%{transform:translateY(0) rotate(0deg)}
  45%{transform:translateY(-7px) rotate(-1deg)}
  70%{transform:translateY(-3px) rotate(1deg)}
}
@keyframes labpMascotPulse{
  0%,100%{filter:drop-shadow(0 0 0 rgba(120,213,146,0))}
  50%{filter:drop-shadow(0 8px 16px rgba(120,213,146,.14))}
}
.labp-hero-mascot img,.labp-mascot img{
  transform-origin:50% 100%;
  animation:labpMascotFloat 4.8s ease-in-out infinite,labpMascotPulse 4.8s ease-in-out infinite;
  will-change:transform;
}
@media(prefers-reduced-motion:reduce){
  .labp-hero-mascot img,.labp-mascot img{animation:none!important}
}
.labp-hero-mascot div{
  padding:16px 17px 18px;
  border-top:1px solid rgba(215,193,138,.15);
}
.labp-hero-mascot span{
  color:var(--premium);
  font-size:9px;
  font-weight:900;
  letter-spacing:.11em;
}
.labp-hero-mascot strong{
  display:block;
  margin-top:7px;
  color:var(--text);
  font-size:16px;
  line-height:1.43;
}

.labp-section{padding:4px 0}
.labp-section-head{margin:8px 0 13px}
.labp-section-head h2{
  margin:6px 0 0;
  color:var(--text);
  font-size:24px;
}

.labp-shortcuts{
  display:flex;
  gap:12px;
  overflow-x:auto;
  max-width:100%;
  padding:0 1px 8px;
  scroll-snap-type:x mandatory;
}
.labp-shortcut{
  flex:0 0 min(270px,82vw);
  min-height:150px;
  text-align:left;
  border:1px solid var(--line);
  border-radius:20px;
  background:var(--s1);
  padding:20px;
  scroll-snap-align:start;
}
.labp-shortcut strong{font-size:19px}
.labp-shortcut p{
  color:var(--muted);
  line-height:1.6;
}
.labp-shortcut b{color:var(--green)}

.labp-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:12px;
}
.labp-card{
  min-width:0;
  padding:20px;
  border:1px solid var(--line);
  border-radius:20px;
  background:var(--s1);
  overflow:hidden;
}
.labp-card.gold{
  border-color:#6f6445;
  background:linear-gradient(145deg,#263527,#102119);
}
.labp-card h2,
.labp-card h3{
  margin:8px 0;
  color:var(--text);
}
.labp-card p{
  margin:0;
  color:var(--muted);
  line-height:1.65;
}
.labp-card a{
  display:inline-flex;
  margin-top:13px;
  color:var(--green);
  font-weight:850;
  text-decoration:none;
}
.labp-primary{
  border:0;
  border-radius:14px;
  background:var(--green);
  color:#07140e;
  font-weight:900;
  padding:14px 17px;
}
.labp-gold-button{
  border:0;
  border-radius:14px;
  background:var(--premium);
  color:#182017;
  font-weight:900;
  padding:13px 16px;
}

.labp-page-head{margin-bottom:20px}
.labp-back{
  border:0;
  background:none;
  color:var(--green);
  padding:0;
  margin-bottom:18px;
  font-weight:800;
}
.labp-page-head h1{
  margin:7px 0;
  color:var(--text);
  font-size:clamp(32px,6vw,56px);
}
.labp-mascot{
  display:grid;
  grid-template-columns:125px minmax(0,1fr);
  align-items:center;
  border:1px solid #6f6445;
  border-radius:24px;
  background:linear-gradient(145deg,#263527,#102119);
  overflow:hidden;
}
.labp-mascot img{
  width:125px;
  max-height:170px;
  object-fit:contain;
  align-self:end;
}
.labp-mascot div{padding:18px}
.labp-mascot span{
  color:var(--premium);
  font-size:9px;
  font-weight:900;
  letter-spacing:.11em;
}
.labp-mascot strong{
  display:block;
  margin-top:8px;
  color:var(--text);
  font-size:18px;
  line-height:1.4;
}

.labp-newsletter{
  white-space:pre-line;
  color:#dce4dd!important;
}
.labp-expand{
  margin-top:14px;
  border:1px solid rgba(215,193,138,.32);
  border-radius:13px;
  background:rgba(215,193,138,.09);
  color:var(--premium);
  font-weight:900;
  padding:11px 14px;
}
.labp-chip{
  display:inline-flex;
  align-items:center;
  gap:7px;
  border-radius:999px;
  padding:7px 10px;
  font-size:11px;
  font-weight:900;
}
.labp-chip.good{background:#163a24;color:var(--green)}
.labp-chip.bad{background:#3b1919;color:var(--danger)}
.labp-chip.neutral{background:#3b3418;color:var(--warning)}

.labp-evidence-empty{
  min-height:230px;
  display:grid;
  place-items:center;
  padding:24px;
  text-align:center;
  border:1px dashed #6f6445;
  border-radius:20px;
  background:radial-gradient(circle at 50% 30%,rgba(215,193,138,.12),transparent 55%),var(--s3);
}
.labp-evidence-empty strong{
  display:block;
  color:var(--text);
}
.labp-evidence-empty span{
  display:block;
  margin-top:8px;
  color:var(--muted);
  line-height:1.55;
}
.labp-evidence-steps{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:8px;
}
.labp-evidence-steps div{
  padding:13px;
  border:1px solid var(--line);
  border-radius:15px;
  background:var(--s3);
}
.labp-evidence-steps span{
  display:block;
  color:var(--premium);
  font-size:9px;
  font-weight:900;
  letter-spacing:.08em;
}
.labp-evidence-steps p{
  margin:7px 0 0;
  color:var(--muted);
  font-size:11px;
  line-height:1.5;
}


.labp-horizontal{
  display:flex;
  gap:12px;
  overflow-x:auto;
  max-width:100%;
  padding:0 1px 10px;
  scroll-snap-type:x mandatory;
  scrollbar-width:thin;
}
.labp-horizontal > *{scroll-snap-align:start}
.labp-snapshot-card{
  flex:0 0 min(330px,82vw);
  min-height:180px;
  padding:19px;
  border:1px solid var(--line);
  border-radius:20px;
  background:var(--s1);
}
.labp-snapshot-card strong{display:block;margin:8px 0;font-size:20px;line-height:1.3}
.labp-snapshot-card p{margin:0;color:var(--muted);line-height:1.55}
.labp-snapshot-card b{display:block;margin-top:14px;color:var(--premium);font-size:12px}
.labp-vector-summary{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.labp-vector-card{padding:20px;border:1px solid var(--line);border-radius:20px;background:var(--s1)}
.labp-vector-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}
.labp-vector-card h2{margin:7px 0 0;font-size:21px}
.labp-vector-value{font-size:25px;font-weight:950;white-space:nowrap}
.labp-vector-value.up{color:var(--green)}.labp-vector-value.down{color:var(--danger)}.labp-vector-value.flat{color:var(--warning)}
.labp-vector-bar{height:8px;margin:17px 0 14px;border-radius:999px;background:#08150f;overflow:hidden}
.labp-vector-bar span{display:block;height:100%;border-radius:inherit;background:var(--premium)}
.labp-vector-card p{margin:0;color:var(--muted);line-height:1.55}
.labp-vector-meta{display:grid;grid-template-columns:1fr auto;gap:10px;margin-top:14px;padding-top:13px;border-top:1px solid var(--line);font-size:11px;color:var(--muted)}
.labp-reading-strip{display:flex;gap:10px;overflow-x:auto;padding-bottom:8px}
.labp-reading-strip article{flex:0 0 min(310px,82vw);padding:18px;border:1px solid var(--line);border-radius:18px;background:var(--s1)}
.labp-reading-strip h3{margin:7px 0}.labp-reading-strip p{margin:0;color:var(--muted);line-height:1.55}
.labp-decision-score{display:flex;gap:4px;margin:12px 0}.labp-decision-score i{width:24px;height:7px;border-radius:999px;background:#20372a}.labp-decision-score i.on{background:var(--premium)}
.labp-evidence-flow{display:flex;gap:10px;overflow-x:auto;padding-bottom:8px}
.labp-evidence-flow article{flex:0 0 min(320px,84vw);padding:18px;border:1px solid var(--line);border-radius:18px;background:var(--s1)}
.labp-evidence-flow h3{margin:7px 0}.labp-evidence-flow p{margin:0;color:var(--muted);line-height:1.55}
.labp-compact-hero{align-items:center}
.labp-compact-hero .labp-hero-mascot{min-height:245px}
.labp-compact-reading{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;max-width:72ch}
.labp-protected-term{white-space:nowrap}

.labp-stage{
  min-height:0;
  display:grid;
  gap:14px;
}
.labp-rail{
  display:flex;
  gap:12px;
  overflow-x:auto;
  overflow-y:hidden;
  max-width:100%;
  padding:2px 2px 12px;
  scroll-snap-type:x mandatory;
  scroll-behavior:smooth;
  overscroll-behavior-inline:contain;
}
.labp-rail > *{scroll-snap-align:start;scroll-snap-stop:always}
.labp-tile{
  flex:0 0 min(320px,84vw);
  height:210px;
  min-height:210px;
  max-height:210px;
  display:flex;
  flex-direction:column;
  padding:18px;
  border:1px solid var(--line);
  border-radius:20px;
  background:var(--s1);
  overflow:hidden;
  text-align:left;
}
.labp-tile.gold{border-color:#6f6445;background:linear-gradient(145deg,#263527,#102119)}
.labp-tile strong{display:block;margin:8px 0;font-size:19px;line-height:1.3}
.labp-tile p{margin:0;color:var(--muted);line-height:1.5;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}
.labp-tile footer{margin-top:auto;padding-top:12px;color:var(--premium);font-size:12px;font-weight:900}
.labp-open-button{border:0;background:none;padding:0;text-align:left;color:var(--premium);font-weight:900}
.labp-focus-card{
  min-height:230px;
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  align-items:center;
  gap:18px;
  padding:22px;
  border:1px solid #6f6445;
  border-radius:24px;
  background:linear-gradient(145deg,#263527,#102119);
}
.labp-focus-card p{margin:8px 0 0;color:var(--muted);line-height:1.65;max-width:78ch}
.labp-focus-card img{width:120px;max-height:150px;object-fit:contain}
.labp-focus-actions{display:flex;gap:9px;margin-top:18px;flex-wrap:wrap}
.labp-focus-actions button{border:1px solid var(--line);border-radius:13px;background:var(--s3);padding:11px 14px;font-weight:850}
.labp-focus-actions .primary{background:var(--premium);color:#182017;border-color:transparent}
.labp-ruler-card{flex:0 0 min(430px,90vw);height:210px;padding:20px;border:1px solid var(--line);border-radius:20px;background:var(--s1)}
.labp-ruler-track{position:relative;height:18px;margin:34px 8px 14px;border-radius:999px;background:linear-gradient(90deg,#8c3d3d 0%,#d0a84e 42%,#78d592 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.labp-ruler-marker{position:absolute;top:50%;width:24px;height:24px;border:4px solid #fff;border-radius:50%;background:#07140e;transform:translate(-50%,-50%);box-shadow:0 4px 14px rgba(0,0,0,.35);transition:left .5s ease}
.labp-ruler-marker:after{content:"";position:absolute;left:50%;top:20px;width:2px;height:18px;background:#fff;transform:translateX(-50%)}
.labp-ruler-labels{display:flex;justify-content:space-between;gap:10px;color:var(--muted);font-size:11px}.labp-ruler-labels strong{display:block;margin-top:3px;color:var(--text);font-size:14px}
.labp-metric-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin-top:14px}.labp-metric-row div{padding:11px;border:1px solid var(--line);border-radius:13px;background:var(--s3)}.labp-metric-row span,.labp-metric-row strong{display:block}.labp-metric-row span{font-size:10px;color:var(--muted)}.labp-metric-row strong{margin-top:4px}
.labp-evidence-compact{display:grid;grid-template-columns:180px minmax(0,1fr);gap:18px;align-items:center;padding:18px;border:1px solid #6f6445;border-radius:22px;background:linear-gradient(145deg,#263527,#102119)}
.labp-evidence-thumb{width:180px;height:130px;border-radius:15px;overflow:hidden;background:#fff}.labp-evidence-thumb img{width:100%;height:100%;object-fit:cover}
.labp-evidence-compact h2{margin:7px 0}.labp-evidence-compact p{margin:0;color:var(--muted);line-height:1.5;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.labp-step-number{width:36px;height:36px;display:grid;place-items:center;border-radius:12px;background:rgba(215,193,138,.14);color:var(--premium);font-weight:950}
.labp-decision-chain .labp-tile{height:225px;min-height:225px;max-height:225px}
.labp-news-connect{display:grid;grid-template-columns:96px minmax(0,1fr) auto;align-items:center;gap:15px;padding:15px 18px;border:1px solid #6f6445;border-radius:20px;background:linear-gradient(145deg,#263527,#102119)}
.labp-news-connect img{width:88px;height:100px;object-fit:contain}.labp-news-connect strong{display:block;font-size:18px}.labp-news-connect p{margin:5px 0 0;color:var(--muted);line-height:1.45}.labp-news-connect button{border:0;border-radius:13px;background:var(--premium);color:#182017;font-weight:900;padding:12px 15px}
.labp-no-vertical{max-height:calc(100vh - 110px);overflow-y:hidden}
@media(max-width:800px){
  .labp-tile{flex-basis:84vw;height:205px;min-height:205px;max-height:205px}
  .labp-focus-card{grid-template-columns:1fr;min-height:0}.labp-focus-card img{display:none}
  .labp-evidence-compact{grid-template-columns:112px minmax(0,1fr);gap:12px}.labp-evidence-thumb{width:112px;height:104px}
  .labp-news-connect{grid-template-columns:78px minmax(0,1fr)}.labp-news-connect img{width:72px;height:82px}.labp-news-connect button{grid-column:1/-1;width:100%}
  .labp-metric-row{grid-template-columns:repeat(3,minmax(0,1fr))}.labp-ruler-card{height:220px}
}


.labp-inline-more{margin-top:14px;border:1px solid rgba(215,193,138,.32);border-radius:13px;background:rgba(215,193,138,.09);color:var(--premium);font-weight:900;padding:11px 14px}
.labp-calculator{flex:0 0 min(520px,92vw);min-height:310px;padding:20px;border:1px solid #6f6445;border-radius:20px;background:linear-gradient(145deg,#263527,#102119)}
.labp-calc-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-top:15px}.labp-calc-grid label{display:grid;gap:7px;color:var(--muted);font-size:12px}.labp-calc-grid select,.labp-calc-grid input{width:100%;min-height:46px;border:1px solid var(--line);border-radius:12px;background:var(--s3);color:var(--text);padding:0 12px}.labp-calc-result{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:14px}.labp-calc-result div{padding:12px;border:1px solid var(--line);border-radius:13px;background:var(--s3)}.labp-calc-result span,.labp-calc-result strong{display:block}.labp-calc-result span{font-size:10px;color:var(--muted)}.labp-calc-result strong{margin-top:5px;font-size:17px}
.labp-ruler-track:before{content:"";position:absolute;left:25%;top:-5px;width:1px;height:28px;background:rgba(255,255,255,.25);box-shadow:calc(25% + 0px) 0 0 rgba(255,255,255,.25)}
.labp-ruler-position{margin-top:10px;text-align:center;color:var(--premium);font-size:12px;font-weight:900}
.labp-facts-shell{display:grid;gap:12px}.labp-fact-stage{min-height:330px;padding:22px;border:1px solid var(--line);border-radius:22px;background:var(--s1)}.labp-fact-stage h2{margin:8px 0 12px;font-size:clamp(24px,4vw,36px)}.labp-fact-stage p{margin:0;color:var(--muted);line-height:1.65}.labp-fact-reading{margin-top:16px;padding-top:16px;border-top:1px solid var(--line);color:#dfe8e1!important}.labp-fact-actions{display:flex;gap:10px;align-items:center;justify-content:space-between;margin-top:18px}.labp-fact-actions button{border:1px solid var(--line);border-radius:12px;background:var(--s3);padding:10px 13px;font-weight:850}.labp-dots{display:flex;justify-content:center;gap:8px}.labp-dot{width:10px!important;height:10px!important;padding:0!important;border:0!important;border-radius:50%!important;background:#4c5d52!important}.labp-dot.active{width:26px!important;border-radius:999px!important;background:var(--premium)!important}
.labp-vector-current{margin-top:10px;color:var(--text);font-size:22px;font-weight:900}.labp-vector-current small{display:block;color:var(--muted);font-size:10px;font-weight:700;margin-bottom:4px}
@media(max-width:800px){.labp-calc-grid{grid-template-columns:1fr}.labp-calc-result{grid-template-columns:1fr}.labp-calculator{min-height:0}.labp-fact-stage{min-height:390px;padding:18px}.labp-fact-actions{display:grid;grid-template-columns:1fr auto 1fr}.labp-fact-actions button:first-child{text-align:left}.labp-fact-actions button:last-child{text-align:right}}

.labp-search{
  position:fixed;
  inset:0;
  z-index:60;
  display:grid;
  place-items:start center;
  padding-top:15vh;
  background:#020806c9;
  backdrop-filter:blur(10px);
}
.labp-search-box{
  position:relative;
  width:min(600px,calc(100% - 28px));
  padding:22px;
  border:1px solid var(--line);
  border-radius:22px;
  background:var(--s1);
}
.labp-search-box button{
  position:absolute;
  right:15px;
  top:12px;
  border:0;
  background:none;
  color:var(--text);
  font-size:28px;
}
.labp-search-box input{
  width:calc(100% - 35px);
  border:0;
  background:none;
  color:var(--text);
  font-size:17px;
}
.labp-search-box input:focus{outline:0}
.labp-search-box p{color:var(--muted)}

.labp-bottom{display:none}
.labp-more-sheet{display:none}

@media(max-width:800px){
  .labp-nav,.labp-date{display:none!important}
  .labp-header{
    width:100%!important;
    height:66px;
    padding:0 16px!important;
    gap:10px;
  }
  .labp-brand{min-width:0}
  .labp-brand strong{font-size:17px;white-space:nowrap}
  .labp-round{
    width:48px;
    height:48px;
    margin-left:auto;
  }
  html,body,#root{
    width:100%!important;
    max-width:100%!important;
    overflow-x:hidden!important;
  }
  .labp-page{
    display:block!important;
    width:auto!important;
    max-width:none!important;
    min-width:0!important;
    margin:0!important;
    padding:18px 16px 118px!important;
    overflow-x:hidden!important;
  }
  .labp-page > *,
  .labp-home > *,
  .labp-grid > *,
  .labp-card,
  .labp-page-head,
  .labp-section{
    width:100%!important;
    max-width:100%!important;
    min-width:0!important;
  }
  .labp-card p,
  .labp-card h1,
  .labp-card h2,
  .labp-card h3,
  .labp-page-head p,
  .labp-page-head h1,
  .labp-hero p,
  .labp-hero h1,
  .labp-mascot strong{
    overflow-wrap:anywhere!important;
    word-break:normal!important;
  }
  .labp-home{
    display:grid!important;
    width:100%!important;
    gap:16px!important;
  }
  .labp-hero{
    display:grid!important;
    grid-template-columns:1fr!important;
    width:100%!important;
    max-width:100%!important;
    padding:20px!important;
    overflow:hidden!important;
  }
  .labp-hero h1{
    font-size:clamp(38px,11.5vw,50px)!important;
    line-height:1.03!important;
    white-space:normal!important;
    overflow-wrap:anywhere!important;
  }
  .labp-page-head h1{
    font-size:clamp(34px,10.5vw,46px)!important;
    line-height:1.08!important;
  }
  .labp-mini-grid{
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
  }
  .labp-mini-grid div:nth-child(3){grid-column:1/-1}
  .labp-hero-mascot{
    min-height:0;
    grid-template-columns:128px minmax(0,1fr);
    grid-template-rows:1fr;
    align-items:center;
  }
  .labp-hero-mascot img{
    width:128px;
    max-height:170px;
    justify-self:center;
  }
  .labp-hero-mascot div{
    align-self:stretch;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-top:0;
    border-left:1px solid rgba(215,193,138,.15);
  }
  .labp-grid{grid-template-columns:1fr!important}
  .labp-vector-summary{grid-template-columns:1fr!important}
  .labp-compact-hero .labp-hero-mascot{min-height:0}
  .labp-mascot{
    grid-template-columns:95px minmax(0,1fr)!important;
  }
  .labp-mascot img{
    width:95px;
    max-height:145px;
  }
  .labp-mascot strong{font-size:15px}
  .labp-evidence-steps{grid-template-columns:1fr}
  .labp-bottom{
    position:fixed;
    z-index:25;
    left:12px;
    right:12px;
    bottom:10px;
    display:grid;
    grid-template-columns:repeat(6,minmax(0,1fr));
    padding:7px;
    border:1px solid var(--line);
    border-radius:18px;
    background:#091810f2;
    backdrop-filter:blur(16px);
  }
  .labp-bottom button{
    min-width:0;
    border:0;
    background:none;
    color:var(--muted);
    padding:10px 2px;
    font-size:10px;
    white-space:normal;
  }
  .labp-bottom .active{
    border-radius:11px;
    background:var(--s2);
    color:var(--premium);
  }
  .labp-more-sheet{
    position:fixed;
    inset:0;
    z-index:55;
    display:flex;
    align-items:flex-end;
    background:rgba(2,8,6,.74);
    backdrop-filter:blur(8px);
  }
  .labp-more-panel{
    width:calc(100% - 24px);
    margin:0 12px 88px;
    padding:18px;
    border:1px solid var(--line);
    border-radius:22px;
    background:#0b1b13;
    box-shadow:0 18px 50px rgba(0,0,0,.4);
  }
  .labp-more-panel-head{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    margin-bottom:12px;
  }
  .labp-more-panel-head strong{font-size:18px}
  .labp-more-panel-head button{
    width:38px;height:38px;border:1px solid var(--line);border-radius:12px;
    background:transparent;color:var(--text);font-size:22px;
  }
  .labp-more-actions{display:grid;grid-template-columns:1fr;gap:9px}
  .labp-more-actions button{
    width:100%;text-align:left;border:1px solid var(--line);border-radius:15px;
    background:var(--s1);color:var(--text);padding:15px;font-weight:850;
  }
}

/* Ajustes pontuais v3: sem espaço morto e sem alterar os módulos aprovados */
.labp-coffee-stack{display:grid;gap:12px}
.labp-coffee-stack .labp-ruler-card,.labp-coffee-stack .labp-calculator{width:100%;max-width:none;flex:none;height:auto;min-height:0}
.labp-calculator{padding:18px}
.labp-calculator h2{margin:7px 0 5px}
.labp-calc-grid-compact{display:grid;grid-template-columns:1.1fr .9fr .9fr;gap:9px;margin-top:13px}
.labp-calc-grid-compact label{display:grid;gap:6px;color:var(--muted);font-size:11px}
.labp-calc-grid-compact select,.labp-calc-grid-compact input{width:100%;height:42px;min-height:42px;border:1px solid var(--line);border-radius:12px;background:var(--s3);color:var(--text);padding:0 11px}
.labp-price-used{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:10px;padding:10px 12px;border:1px solid var(--line);border-radius:13px;background:var(--s3)}
.labp-price-used span{font-size:11px;color:var(--muted)}.labp-price-used strong{font-size:17px}
.labp-calc-result-horizontal{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;margin-top:10px;padding-bottom:3px}
.labp-calc-result-horizontal div{flex:0 0 min(210px,67vw);scroll-snap-align:start;padding:11px;border:1px solid var(--line);border-radius:13px;background:var(--s3)}
.labp-calc-result-horizontal span,.labp-calc-result-horizontal strong{display:block}.labp-calc-result-horizontal span{font-size:10px;color:var(--muted)}.labp-calc-result-horizontal strong{margin-top:4px;font-size:17px}
.labp-connecting-sheet{position:fixed;inset:0;z-index:65;display:flex;align-items:flex-end;background:rgba(2,8,6,.76);backdrop-filter:blur(8px)}
.labp-connecting-panel{width:min(680px,calc(100% - 24px));max-height:calc(100dvh - 118px);margin:0 auto 88px;padding:18px;border:1px solid #6f6445;border-radius:22px;background:linear-gradient(145deg,#263527,#102119);box-shadow:0 18px 50px rgba(0,0,0,.42);overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable}
.labp-connecting-head{display:flex;justify-content:space-between;align-items:center;gap:12px}.labp-connecting-head h2{margin:5px 0}.labp-connecting-head button{width:38px;height:38px;border:1px solid var(--line);border-radius:12px;background:transparent;color:var(--text);font-size:22px}
.labp-connecting-panel p{margin:12px 0 0;color:var(--muted);line-height:1.6}
.labp-vector-unavailable{font-size:14px!important;color:var(--muted)!important}
@media(max-width:800px){
  .labp-coffee-stack{gap:10px}
  .labp-ruler-card{padding:17px;height:auto!important}
  .labp-ruler-track{margin:28px 7px 12px}
  .labp-calculator{padding:17px}
  .labp-calc-grid-compact{grid-template-columns:1fr 1fr}
  .labp-calc-grid-compact label:first-child{grid-column:1/-1}
  .labp-calculator>p{font-size:13px;line-height:1.4!important}
  .labp-more-panel{padding:15px;margin-bottom:88px}
  .labp-more-actions button{padding:13px}
}



/* AJUSTES V4 — apenas pontos solicitados */
.labp-home-date-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
.labp-home-date-top .labp-update{margin:0;display:grid;line-height:1.18;text-align:center}
.labp-update-label,.labp-update-date{display:block}
.labp-vector-summary{display:flex!important;gap:12px!important;overflow-x:auto!important;scroll-snap-type:x mandatory;padding:0 2px 10px;scrollbar-width:none}
.labp-vector-summary::-webkit-scrollbar{display:none}
.labp-vector-summary .labp-vector-card{flex:0 0 min(430px,88vw);scroll-snap-align:start}
.labp-facts-carousel{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;gap:12px;scrollbar-width:none}
.labp-facts-carousel::-webkit-scrollbar{display:none}
.labp-facts-carousel .labp-fact-stage{flex:0 0 100%;scroll-snap-align:center}
.labp-facts-dots-only{display:flex;justify-content:center;gap:8px;margin-top:14px}
.labp-calc-stepper{display:grid;grid-template-columns:42px minmax(0,1fr) 42px;align-items:center;gap:6px}
.labp-calc-stepper button{height:42px;border:1px solid var(--line);border-radius:12px;background:var(--s3);color:var(--premium);font-size:21px;font-weight:900}
.labp-calc-stepper input{text-align:center}
.labp-calc-helper{display:flex;gap:7px;overflow-x:auto;margin-top:8px;scrollbar-width:none}
.labp-calc-helper::-webkit-scrollbar{display:none}
.labp-calc-helper button{flex:0 0 auto;border:1px solid var(--line);border-radius:999px;background:transparent;color:var(--muted);padding:7px 10px;font-size:11px;font-weight:800}
.labp-library-grid{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px;scrollbar-width:none}
.labp-library-grid::-webkit-scrollbar{display:none}
.labp-library-card{flex:0 0 min(340px,86vw);scroll-snap-align:start;text-align:left;border:1px solid var(--line);border-radius:20px;background:var(--s1);padding:20px}
.labp-library-card strong{display:block;font-size:20px}.labp-library-card p{color:var(--muted);line-height:1.55}.labp-library-card b{color:var(--premium)}
.labp-glossary-index{display:flex;gap:7px;overflow-x:auto;padding-bottom:9px;scrollbar-width:none}.labp-glossary-index::-webkit-scrollbar{display:none}.labp-glossary-index button{flex:0 0 auto;width:38px;height:38px;border:1px solid var(--line);border-radius:12px;background:var(--s1);color:var(--premium);font-weight:900}.labp-glossary-list{display:grid;gap:10px}.labp-glossary-card{padding:17px 18px;border:1px solid var(--line);border-radius:17px;background:var(--s1)}.labp-glossary-card h2{margin:0 0 6px;font-size:19px}.labp-glossary-card p{margin:0;color:var(--muted);line-height:1.55}.labp-evidence-thumb-link{display:block;border-radius:15px;overflow:hidden}.labp-evidence-analysis{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;padding:12px 0 4px;scrollbar-width:none}.labp-evidence-analysis::-webkit-scrollbar{display:none}.labp-evidence-analysis article{flex:0 0 min(320px,84vw);scroll-snap-align:start;padding:17px;border:1px solid var(--line);border-radius:17px;background:var(--s1)}.labp-evidence-analysis article strong{display:block;margin:7px 0}.labp-evidence-analysis article p{margin:0;color:var(--muted);line-height:1.55}
@media(max-width:800px){
  .labp-home-date-top{align-items:flex-start}
  .labp-home-date-top .labp-update{min-width:132px;padding:7px 10px}
  .labp-update-label{font-size:10px}
  .labp-update-date{margin-top:2px;font-size:11px}
  .labp-vector-summary .labp-vector-card{flex-basis:86vw!important}
  .labp-calc-grid-compact{grid-template-columns:1fr!important}
  .labp-calc-grid-compact label:first-child{grid-column:auto!important}
}


/* Ajustes pontuais v6: tradução PT/EN e navegação horizontal no notebook */
.labp-language-switch{display:flex;align-items:center;gap:5px;margin-left:2px}
.labp-language-switch button{width:42px;height:34px;border:1px solid var(--line);border-radius:10px;background:transparent;color:var(--text);font-size:17px;line-height:1;padding:0;display:grid;place-items:center}
.labp-language-switch button.active{border-color:var(--premium);background:rgba(215,193,138,.12);box-shadow:inset 0 0 0 1px rgba(215,193,138,.12)}
.labp-language-switch button span{font-size:9px;font-weight:900;margin-left:2px}
#google_translate_element{position:fixed!important;left:-9999px!important;top:-9999px!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important}
.goog-te-banner-frame.skiptranslate,.goog-te-gadget-icon{display:none!important}
#goog-gt-tt,.goog-te-balloon-frame{display:none!important}
.goog-text-highlight{background:transparent!important;box-shadow:none!important}
body{top:0!important}
.labp-scroll-shell{position:relative;min-width:0}
.labp-scroll-arrow{position:absolute;z-index:4;top:50%;transform:translateY(-50%);width:42px;height:42px;border:1px solid rgba(215,193,138,.45);border-radius:50%;background:#091810ef;color:var(--premium);font-size:25px;line-height:1;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.28)}
.labp-scroll-arrow.left{left:-15px}.labp-scroll-arrow.right{right:-15px}
.labp-scroll-arrow:disabled{opacity:.28;cursor:default}
.labp-desktop-scrollbar{scrollbar-width:thin;scrollbar-color:rgba(215,193,138,.55) rgba(255,255,255,.06)}
.labp-desktop-scrollbar::-webkit-scrollbar{height:8px}
.labp-desktop-scrollbar::-webkit-scrollbar-track{background:rgba(255,255,255,.05);border-radius:999px}
.labp-desktop-scrollbar::-webkit-scrollbar-thumb{background:rgba(215,193,138,.55);border-radius:999px}
.labp-vector-summary.labp-desktop-scrollbar{display:flex;grid-template-columns:none;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;padding:2px 4px 13px}
.labp-vector-summary.labp-desktop-scrollbar .labp-vector-card{flex:0 0 min(360px,82vw);scroll-snap-align:start}
.labp-evidence-analysis.labp-desktop-scrollbar{scroll-behavior:smooth;padding-left:4px;padding-right:4px;padding-bottom:13px;scrollbar-width:thin}
@media(max-width:800px){
  .labp-language-switch{gap:3px;margin-left:auto}
  .labp-language-switch button{width:37px;height:32px;font-size:15px}
  .labp-language-switch button span{display:none}
  .labp-scroll-arrow{display:none!important}
  .labp-desktop-scrollbar{scrollbar-width:none}
  .labp-desktop-scrollbar::-webkit-scrollbar{display:none}
}

/* Ajuste pontual v8: mesma barra inferior e menu Mais também no notebook */
@media(min-width:801px){
  .labp-bottom{
    position:fixed;
    z-index:25;
    left:50%;
    bottom:14px;
    transform:translateX(-50%);
    display:grid;
    grid-template-columns:repeat(6,minmax(88px,1fr));
    width:min(740px,calc(100% - 40px));
    padding:7px;
    border:1px solid var(--line);
    border-radius:18px;
    background:#091810f2;
    backdrop-filter:blur(16px);
    box-shadow:0 12px 34px rgba(0,0,0,.28);
  }
  .labp-bottom button{
    min-width:0;
    border:0;
    background:none;
    color:var(--muted);
    padding:10px 8px;
    font-size:11px;
    white-space:nowrap;
  }
  .labp-bottom .active{
    border-radius:11px;
    background:var(--s2);
    color:var(--premium);
  }
  .labp-more-sheet{
    position:fixed;
    inset:0;
    z-index:55;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    background:rgba(2,8,6,.74);
    backdrop-filter:blur(8px);
  }
  .labp-more-panel{
    width:min(440px,calc(100% - 40px));
    margin:0 20px 88px;
    padding:18px;
    border:1px solid var(--line);
    border-radius:22px;
    background:#0b1b13;
    box-shadow:0 18px 50px rgba(0,0,0,.4);
  }
  .labp-more-panel-head{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    margin-bottom:12px;
  }
  .labp-more-panel-head strong{font-size:18px}
  .labp-more-panel-head button{
    width:38px;
    height:38px;
    border:1px solid var(--line);
    border-radius:12px;
    background:transparent;
    color:var(--text);
    font-size:22px;
  }
  .labp-more-actions{
    display:grid;
    grid-template-columns:1fr;
    gap:9px;
  }
  .labp-more-actions button{
    width:100%;
    text-align:left;
    border:1px solid var(--line);
    border-radius:15px;
    background:var(--s1);
    color:var(--text);
    padding:15px;
    font-weight:850;
  }
}

`;

function normalizeKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (cell || row.length) {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = "";
      }
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell.trim());
    rows.push(row);
  }

  return rows;
}

function normalizeRow(headers, columns) {
  return Object.fromEntries(
    headers.map((header, index) => [
      normalizeKey(header),
      columns[index] || "",
    ])
  );
}

function getField(object, aliases, fallback = "") {
  for (const alias of aliases) {
    const value = object?.[normalizeKey(alias)];
    if (value !== undefined && String(value).trim() !== "") return value;
  }
  return fallback;
}

function num(value) {
  if (value === null || value === undefined || value === "") return 0;
  let clean = String(value)
    .replace(/[^0-9,.-]/g, "")
    .trim();
  if (!clean) return 0;

  const hasComma = clean.includes(",");
  const hasDot = clean.includes(".");

  if (hasComma && hasDot) {
    if (clean.lastIndexOf(",") > clean.lastIndexOf(".")) {
      clean = clean.replace(/\./g, "").replace(",", ".");
    } else {
      clean = clean.replace(/,/g, "");
    }
  } else if (hasComma) {
    clean = clean.replace(/\./g, "").replace(",", ".");
  } else if ((clean.match(/\./g) || []).length > 1) {
    clean = clean.replace(/\./g, "");
  }

  const parsed = Number(clean);
  return Number.isFinite(parsed) ? parsed : 0;
}

function money(value, digits = 0) {
  return value
    ? Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: digits,
      })
    : "—";
}

function formatDate(value) {
  if (!value) {
    return new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  const text = String(value).trim();
  const parts = text.split(/[\/-]/);

  if (parts.length === 3 && parts[0].length <= 2) {
    const [day, month, year] = parts;
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    if (!Number.isNaN(date.getTime())) {
      return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }
  }

  const date = new Date(value);

  if (!Number.isNaN(date.getTime())) {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return text;
}


function readIce(current) {
  return num(getField(current, [
    "ice_robusta","ice robusta","robusta","ice","ice_londres","ice londres",
    "robusta_londres","bolsa_londres","ice_robusta_usd_t","ice robusta usd t",
    "ice_robusta_usdt","ice_usd_t","iceusdt","londres","ice atual","ice_atual"
  ]));
}

function readDollar(current, liveDollar) {
  return Number(liveDollar) || num(getField(current, [
    "dolar","dólar","usd_brl","usdbrl","cambio","câmbio","dolar_atual","dólar atual"
  ]));
}

function buildFacts(current) {
  return [1,2,3,4].map((index) => ({
    title: getField(current,[`premium_noticia${index}_titulo`,`noticia${index}_titulo`,`noticia_${index}_titulo`,`titulo_noticia${index}`],`Fato ${index}`),
    text: getField(current,[`premium_noticia${index}_texto`,`noticia${index}_texto`,`noticia_${index}_texto`,`noticia${index}`,`noticia_${index}`],"Leitura ainda não preenchida na planilha."),
    reading: getField(current,[`premium_noticia${index}_leitura`,`noticia${index}_leitura`,`leitura_noticia${index}`],"Abra este fato para ver sua conexão com o mercado do Conilon."),
    link: getField(current,[`premium_noticia${index}_link`,`noticia${index}_link`,`noticia_${index}_link`,`link_noticia${index}`],"")
  }));
}

function readPercent(current, aliases) {
  const raw = getField(current, aliases, "");
  if (raw === "") return null;
  const value = num(raw);
  return Number.isFinite(value) ? value : null;
}

function buildVectorContext(current, history, dollar, dollarPreviousLive = 0) {
  const variation = (currentValue, previousValue) =>
    currentValue && previousValue
      ? ((currentValue - previousValue) / previousValue) * 100
      : null;

  const physical = num(getField(current, ["cooabriel"]));
  const physicalPrevious = history.at(-2)?.price || physical;

  const ice = readIce(current);
  const icePrevious = num(getField(current, [
    "ice_anterior","ice robusta anterior","ice_robusta_anterior","robusta_anterior",
    "fechamento_ice_anterior","ice_fechamento_anterior","londres_anterior"
  ]));
  const iceDirectChange = readPercent(current, [
    "ice_variacao","ice variação","variacao_ice","variação ice","ice_robusta_variacao",
    "ice robusta variação","variacao_ice_robusta","robusta_variacao","londres_variacao",
    "variacao_londres","ice_percentual","ice_pct"
  ]);

  const effectiveDollar = readDollar(current, dollar);
  const dollarPrevious = num(getField(current, [
    "dolar_anterior","dólar anterior","dollar_anterior","usd_brl_anterior",
    "cambio_anterior","câmbio anterior"
  ])) || Number(dollarPreviousLive) || 0;
  const dollarDirectChange = readPercent(current, [
    "dolar_variacao","dólar variação","variacao_dolar","variação dólar",
    "dollar_variacao","usd_brl_variacao","cambio_variacao","variacao_cambio",
    "dolar_percentual","dolar_pct"
  ]);

  const vectors = [
    {
      name: "Mercado físico",
      current: physical,
      previous: physicalPrevious,
      change: variation(physical, physicalPrevious),
      weight: 5,
    },
    {
      name: "ICE Robusta",
      current: ice,
      previous: icePrevious,
      change: iceDirectChange !== null ? iceDirectChange : variation(ice, icePrevious),
      weight: 3,
    },
    {
      name: "Dólar",
      current: effectiveDollar,
      previous: dollarPrevious,
      change: dollarDirectChange !== null ? dollarDirectChange : variation(effectiveDollar, dollarPrevious),
      weight: 2,
    },
  ];

  const favorable = vectors.filter((item) => item.change !== null && item.change > 0.15);
  const negative = vectors.filter((item) => item.change !== null && item.change < -0.15);
  const neutral = vectors.filter((item) => item.change !== null && Math.abs(item.change) <= 0.15);

  const score = vectors.reduce((sum, item) => {
    if (item.change === null || Math.abs(item.change) <= 0.15) return sum;
    return sum + Math.sign(item.change) * item.weight;
  }, 0);

  const dominant = [...vectors].sort(
    (a, b) =>
      Math.abs(b.change * b.weight) - Math.abs(a.change * a.weight)
  )[0];

  return { vectors, favorable, negative, neutral, score, dominant };
}


function HorizontalNavigator({ children, className = "", ariaLabel = "Conteúdo horizontal" }) {
  const railRef = React.useRef(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(true);
  const update = React.useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanLeft(rail.scrollLeft > 8);
    setCanRight(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 8);
  }, []);
  React.useEffect(() => {
    update();
    const rail = railRef.current;
    if (!rail) return undefined;
    const observer = new ResizeObserver(update);
    observer.observe(rail);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [update, children]);
  function move(direction) {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.max(280, rail.clientWidth * 0.78), behavior: "smooth" });
  }
  return (
    <div className="labp-scroll-shell">
      <button className="labp-scroll-arrow left" type="button" aria-label="Ver conteúdo anterior" onClick={() => move(-1)} disabled={!canLeft}>‹</button>
      {React.cloneElement(children, {
        ref: railRef,
        className: `${children.props.className || ""} labp-desktop-scrollbar ${className}`.trim(),
        onScroll: (event) => {
          children.props.onScroll?.(event);
          update();
        },
        "aria-label": ariaLabel,
      })}
      <button className="labp-scroll-arrow right" type="button" aria-label="Ver próximo conteúdo" onClick={() => move(1)} disabled={!canRight}>›</button>
    </div>
  );
}

function Header({ page, navigate, date, onSearch, language, onLanguage }) {
  return (
    <header className="labp-header">
      <button className="labp-brand" onClick={() => navigate("home")}>
        <img src={logoConilon} alt="Logo Conilon Hoje" />
        <div>
          <strong>Conilon Hoje</strong>
          <small>PREMIUM</small>
        </div>
      </button>

      <div className="labp-language-switch notranslate" translate="no" aria-label="Idioma do aplicativo">
        <button type="button" className={language === "pt" ? "active" : ""} onClick={() => onLanguage("pt")} aria-label="Português">🇧🇷 <span>PT</span></button>
        <button type="button" className={language === "en" ? "active" : ""} onClick={() => onLanguage("en")} aria-label="English">🇬🇧 <span>EN</span></button>
      </div>

      <nav className="labp-nav">
        {[
          ["home", "Hoje"],
          ["coffee", "Meu café"],
          ["vectors", "Vetores"],
          ["news", "Fatos"],
          ["evidence", "Evidências"],
        ].map(([id, label]) => (
          <button
            key={id}
            className={page === id ? "active" : ""}
            onClick={() => navigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="labp-date">
        <strong>{date}</strong>
        <span>Atualização Premium</span>
      </div>

      <button className="labp-round" onClick={onSearch} aria-label="Pesquisar">
        ⌕
      </button>
    </header>
  );
}

function Home({ current, history, dollar, date, vectorContext, navigate }) {
  const physical = num(getField(current, ["cooabriel"]));
  const iceValue = readIce(current);
  const effectiveDollar = readDollar(current, dollar);
  const executiveReading = getField(
    current,
    ["leitura_premium","sintese_premium","conversa_premium","analise_premium","resumo_premium","leitura_integrada"],
    "A leitura executiva Premium ainda não foi preenchida na planilha."
  );
  const mascot = vectorContext.score >= 4 ? mascoteAlegre : vectorContext.score <= -4 ? mascotePensando : mascoteObservando;
  const mascotText = vectorContext.score >= 4
    ? "Os vetores estão mais construtivos, mas ainda exigem continuidade."
    : vectorContext.score <= -4
    ? "Há pressão relevante. O ponto agora é verificar se ela chega ao físico."
    : "Os sinais estão divididos. Compare os vetores antes de concluir.";

  return <main className="labp-page labp-home">
    <section className="labp-hero labp-compact-hero">
      <div>
        <div className="labp-home-date-top"><span className="labp-eyebrow">LEITURA PREMIUM DE HOJE</span><span className="labp-update"><span className="labp-update-label">Atualizado</span><span className="labp-update-date">{date}</span></span></div>
        <h1>O mercado em 60 segundos</h1>
        <p className="labp-compact-reading">{executiveReading}</p>
        <button className="labp-inline-more" onClick={()=>navigate("reading-full")}>Ler análise completa →</button>
        <div className="labp-mini-grid">
          <div><span>Físico</span><strong>{money(physical)}</strong></div>
          <div><span className="notranslate" translate="no">ICE Robusta</span><strong>{iceValue ? iceValue.toLocaleString("pt-BR") : "—"}</strong></div>
          <div><span>Dólar</span><strong>{money(effectiveDollar,2)}</strong></div>
        </div>
      </div>
      <div className="labp-hero-mascot"><img src={mascot} alt="Seu Conilon"/><div><span>SEU CONILON</span><strong>{mascotText}</strong></div></div>
    </section>

    <section className="labp-section">
      <div className="labp-section-head"><span className="labp-eyebrow">LEITURA GUIADA</span><h2>Escolha o próximo caminho</h2></div>
      <div className="labp-shortcuts">
        {[["coffee","Meu café","Preço, margem, posição em 30 dias e calculadora."],["vectors","Vetores","O que favorece, pressiona e domina."],["news","Fatos","Quatro notícias completas com leitura Premium."],["evidence","Evidências","Provas e sinais que sustentam a leitura."]].map(([id,title,description])=><button className="labp-shortcut" key={id} onClick={()=>navigate(id)}><strong>{title}</strong><p>{description}</p><b>Abrir →</b></button>)}
      </div>
    </section>
  </main>;
}

function ReadingPage({ current, vectorContext, index, navigate }) {
  const executiveReading=getField(current,["leitura_premium","sintese_premium","conversa_premium","analise_premium","resumo_premium","leitura_integrada"],"Leitura ainda não preenchida.");
  return <main className="labp-page"><div className="labp-page-head"><button className="labp-back" onClick={()=>navigate("back")}>← Voltar</button><span className="labp-eyebrow">MERCADO EM 60 SEGUNDOS</span><h1>Análise completa</h1></div><section className="labp-focus-card"><div><p>{executiveReading}</p></div><img src={mascoteObservando} alt="Seu Conilon"/></section></main>;
}

function CoffeePage({ current, history, navigate }) {
  const [type, setType] = React.useState("7");
  const [bags, setBags] = React.useState(0);
  const [customCost, setCustomCost] = React.useState("");
  const physical = num(getField(current, ["cooabriel"]));
  const prices = {
    "7": physical,
    "7/8": num(getField(current, ["cooabriel_tipo_78", "cooabriel_78", "tipo_78"])) || physical,
    "8": num(getField(current, ["cooabriel_tipo_8", "cooabriel_8", "tipo_8"])) || physical,
  };
  const selectedPrice = prices[type] || physical;
  const values = history.map((item) => item.price).filter(Boolean);
  const min = values.length ? Math.min(...values) : physical;
  const max = values.length ? Math.max(...values) : physical;
  const rawPosition = max > min ? ((physical - min) / (max - min)) * 100 : 50;
  const position = Math.max(1, Math.min(99, rawPosition));
  const defaultCost = num(getField(current, ["custo_es", "custo_producao", "custo"], 591)) || 591;
  const cost = customCost === "" ? defaultCost : Math.max(0, Number(customCost) || 0);
  const safeBags = Math.max(0, Number(bags) || 0);
  const marginPerBag = selectedPrice - cost;
  const total = safeBags * selectedPrice;
  const totalMargin = safeBags * marginPerBag;
  const changeBags = (delta) => setBags((value) => Math.max(0, (Number(value) || 0) + delta));

  return <main className="labp-page">
    <div className="labp-page-head">
      <button className="labp-back" onClick={() => navigate("back")}>← Voltar</button>
      <span className="labp-eyebrow">MEU CAFÉ</span>
      <h1>Preço, margem e posição</h1>
      <p>Veja a posição do preço e, logo abaixo, simule o seu lote.</p>
    </div>
    <div className="labp-coffee-stack">
      <article className="labp-ruler-card">
        <span className="labp-eyebrow">POSIÇÃO EM 30 DIAS</span><h2>Onde está meu café?</h2>
        <div className="labp-ruler-track"><span className="labp-ruler-marker" style={{ left: `${position}%` }} /></div>
        <div className="labp-ruler-labels"><div>Mínima<strong>{money(min)}</strong></div><div style={{ textAlign: "center" }}>Hoje<strong>{money(physical)}</strong></div><div style={{ textAlign: "right" }}>Máxima<strong>{money(max)}</strong></div></div>
        <div className="labp-ruler-position">O preço está em {rawPosition.toFixed(0)}% da faixa dos últimos 30 registros.</div>
      </article>
      <article className="labp-calculator">
        <span className="labp-eyebrow">CALCULADORA DO MEU CAFÉ</span><h2>Simule preço, margem e lote</h2>
        <p style={{ color: "var(--muted)", margin: 0 }}>Comece com zero saca, escolha o tipo e ajuste o custo somente quando desejar usar o seu próprio valor.</p>
        <div className="labp-calc-grid-compact">
          <label>Tipo do café<select value={type} onChange={(event) => setType(event.target.value)}><option value="7">Tipo 7</option><option value="7/8">Tipo 7/8</option><option value="8">Tipo 8</option></select></label>
          <label>Quantidade de sacas<div className="labp-calc-stepper"><button type="button" onClick={() => changeBags(-1)} aria-label="Diminuir uma saca">−</button><input type="number" min="0" step="1" value={bags} onChange={(event) => setBags(Math.max(0, Number(event.target.value) || 0))} /><button type="button" onClick={() => changeBags(1)} aria-label="Aumentar uma saca">+</button></div><div className="labp-calc-helper">{[10, 50, 100].map((value) => <button type="button" key={value} onClick={() => setBags(value)}>{value} sacas</button>)}<button type="button" onClick={() => setBags(0)}>Zerar</button></div></label>
          <label>Custo por saca<input type="number" min="0" step="0.01" value={customCost} placeholder={String(defaultCost)} onChange={(event) => setCustomCost(event.target.value)} /></label>
        </div>
        <div className="labp-price-used"><span>Preço usado · Tipo {type}</span><strong>{money(selectedPrice)}</strong></div>
        <div className="labp-calc-result-horizontal"><div><span>Margem por saca</span><strong>{money(marginPerBag)}</strong></div><div><span>Valor bruto do lote</span><strong>{money(total)}</strong></div><div><span>Margem estimada</span><strong>{money(totalMargin)}</strong></div></div>
      </article>
    </div>
  </main>;
}

function FactsPage({ current, navigate }) {
  const facts = buildFacts(current);
  const [active, setActive] = React.useState(0);
  const [connectingOpen, setConnectingOpen] = React.useState(false);
  const carouselRef = React.useRef(null);
  const connection = getField(current, ["leitura_premium", "sintese_premium", "conversa_premium", "analise_premium", "resumo_premium", "leitura_integrada"], "A leitura executiva Premium ainda não foi preenchida na planilha.");
  function goToFact(index) { const safe = Math.max(0, Math.min(facts.length - 1, index)); setActive(safe); const container = carouselRef.current; if (container) container.scrollTo({ left: container.clientWidth * safe, behavior: "smooth" }); }
  function updateActiveFromScroll() { const container = carouselRef.current; if (!container?.clientWidth) return; const nextIndex = Math.round(container.scrollLeft / container.clientWidth); if (nextIndex !== active) setActive(Math.max(0, Math.min(facts.length - 1, nextIndex))); }
  return <main className="labp-page">
    <div className="labp-page-head"><button className="labp-back" onClick={() => navigate("back")}>← Voltar</button><span className="labp-eyebrow">FATOS</span><h1>Quatro fatos, quatro leituras</h1><p>Deslize o dedo para os lados ou toque nas bolinhas para avançar e voltar.</p></div>
    <div className="labp-facts-shell"><div className="labp-facts-carousel" ref={carouselRef} onScroll={updateActiveFromScroll}>{facts.map((fact, index) => <article className="labp-fact-stage" key={index}><span className="labp-eyebrow">FATO {index + 1} DE {facts.length}</span><h2>{fact.title}</h2><p>{fact.text}</p><p className="labp-fact-reading"><strong>Leitura Premium: </strong>{fact.reading}</p>{fact.link && <a className="labp-gold-button" style={{ display: "inline-flex", marginTop: 16, textDecoration: "none" }} href={fact.link} target="_blank" rel="noreferrer">Abrir fonte →</a>}</article>)}</div><div className="labp-facts-dots-only">{facts.map((_, index) => <button key={index} className={`labp-dot ${index === active ? "active" : ""}`} aria-label={`Abrir fato ${index + 1}`} onClick={() => goToFact(index)} />)}</div></div>
    <section className="labp-news-connect" style={{ marginTop: 16 }}><img src={mascoteObservando} alt="Seu Conilon" /><div><strong>Conectando os pontos</strong><p>Abra a conexão do dia entre os quatro fatos.</p></div><button onClick={() => setConnectingOpen(true)}>Conectando os pontos →</button></section>
    {connectingOpen && <div className="labp-connecting-sheet" onClick={() => setConnectingOpen(false)}><section className="labp-connecting-panel" onClick={(event) => event.stopPropagation()}><div className="labp-connecting-head"><div><span className="labp-eyebrow">CONEXÃO DO DIA</span><h2>Conectando os pontos</h2></div><button onClick={() => setConnectingOpen(false)}>×</button></div><p>{connection}</p></section></div>}
  </main>;
}

function FactDetailPage({ current, index, navigate }) {
  const fact=buildFacts(current)[Math.max(0,Math.min(3,index))];
  return <main className="labp-page"><div className="labp-page-head"><button className="labp-back" onClick={()=>navigate("back")}>← Voltar</button><span className="labp-eyebrow">FATO {index+1}</span><h1>{fact.title}</h1></div><section className="labp-focus-card"><div><span className="labp-eyebrow">LEITURA PREMIUM</span><p>{fact.reading || fact.text}</p><div className="labp-focus-actions">{fact.link&&<a className="labp-gold-button" href={fact.link} target="_blank" rel="noreferrer">Abrir fonte original →</a>}{index<3&&<button className="primary" onClick={()=>navigate(`fact-${index+1}`)}>Próximo fato →</button>}</div></div><img src={mascotePensando} alt="Seu Conilon"/></section></main>;
}

function ConnectingPage({ current, navigate }) {
  const text=getField(current,["conectando_os_pontos","premium_conectando_os_pontos","conexao_premium","leitura_integrada"],"A conexão entre os fatos ainda não foi preenchida na planilha.");
  return <main className="labp-page"><div className="labp-page-head"><button className="labp-back" onClick={()=>navigate("back")}>← Voltar</button><span className="labp-eyebrow">CONEXÃO DO DIA</span><h1>Conectando os pontos</h1></div><section className="labp-focus-card"><div><p>{text}</p><div className="labp-focus-actions"><button className="primary" onClick={()=>navigate("vectors")}>Ver os vetores →</button></div></div><img src={mascoteObservando} alt="Seu Conilon"/></section></main>;
}

function VectorsPage({ current, history, dollar, dollarPrevious, navigate }) {
  const context = buildVectorContext(current, history, dollar, dollarPrevious);
  const interpretations = {
    "Mercado físico": "Mostra o preço efetivamente praticado na origem. É o vetor de maior peso para a realidade do produtor.",
    "ICE Robusta": "Mostra a referência internacional. Importa quando o movimento encontra confirmação no câmbio e no físico.",
    "Dólar": "Altera a conversão da bolsa para reais. Pode reforçar ou amortecer o movimento externo.",
  };
  const weights = {"Mercado físico":5,"ICE Robusta":3,"Dólar":2};
  const conclusion = context.score >= 4
    ? "O conjunto está construtivo: a maioria dos vetores relevantes favorece o preço. A confirmação depende de continuidade no físico."
    : context.score <= -4
    ? "O conjunto está pressionado: os vetores de maior peso perderam força. Acompanhe se a fraqueza chega ao físico regional."
    : "O conjunto está dividido. Nenhum sinal isolado é suficiente; a leitura correta está na relação entre os três vetores.";

  return <main className="labp-page labp-home">
    <div className="labp-page-head"><button className="labp-back" onClick={()=>navigate("back")}>← Voltar</button><span className="labp-eyebrow">TERMÔMETRO DO MERCADO</span><h1>Como ler os vetores</h1><p>Primeiro veja a direção. Depois entenda o peso e a conexão de cada sinal com o preço físico.</p></div>
    <section className="labp-mascot"><img src={mascoteObservando} alt="Seu Conilon observando"/><div><span>SEU CONILON INTERPRETA</span><strong>{conclusion}</strong></div></section>
    <HorizontalNavigator ariaLabel="Vetores do mercado">
      <div className="labp-vector-summary">
      {context.vectors.map((item)=>{
        const hasChange=item.change!==null;
        const direction=!hasChange?"flat":item.change>0.15?"up":item.change<-0.15?"down":"flat";
        const arrow=!hasChange?"—":direction==="up"?"▲":direction==="down"?"▼":"●";
        const width=!hasChange?18:Math.min(100,Math.max(18,Math.abs(item.change)*18+25));
        return <article className="labp-vector-card" key={item.name}>
          <div className="labp-vector-top"><div><span className="labp-eyebrow notranslate" translate={item.name==="ICE Robusta"?"no":undefined}>{item.name}</span><h2>{!hasChange?"Sem comparação":direction==="up"?"Favorece":direction==="down"?"Pressiona":"Neutro"}</h2></div><div className={`labp-vector-value ${direction} ${!hasChange?"labp-vector-unavailable":""}`}>{hasChange?`${arrow} ${Math.abs(item.change).toFixed(2).replace(".",",")}%`:"Variação indisponível"}</div></div>
          <div className="labp-vector-current"><small>Valor atual</small>{item.name === "Dólar" ? money(item.current, 2) : item.name === "Mercado físico" ? money(item.current) : item.current ? item.current.toLocaleString("pt-BR") : "—"}</div>
          <div className="labp-vector-bar"><span style={{width:`${width}%`}} /></div>
          <p>{interpretations[item.name]}</p>
          <div className="labp-vector-meta"><span>Peso na leitura</span><strong>{"★".repeat(weights[item.name])}{"☆".repeat(5-weights[item.name])}</strong></div>
        </article>
      })}
      </div>
    </HorizontalNavigator>
    <section className="labp-section"><div className="labp-section-head"><span className="labp-eyebrow">ORDEM DE LEITURA</span><h2>Leia esta tela em três passos</h2></div><div className="labp-reading-strip">
      <article><span className="labp-eyebrow">01 · DIREÇÃO</span><h3>Quem sobe, cai ou fica neutro?</h3><p>Comece pelo sinal objetivo. Não tire conclusão antes de comparar os três.</p></article>
      <article><span className="labp-eyebrow">02 · PESO</span><h3>Qual vetor manda mais?</h3><p>O físico tem maior peso porque representa a negociação regional; bolsa e dólar explicam parte do movimento.</p></article>
      <article><span className="labp-eyebrow">03 · CONFIRMAÇÃO</span><h3>Os sinais estão alinhados?</h3><p>Quando físico, ICE Robusta e dólar apontam na mesma direção, a leitura ganha consistência.</p></article>
    </div></section>
  </main>;
}

function LibraryPage({ navigate }) {
  const terms = [
    ["Ágio", "Valor adicional pago acima de uma referência por qualidade, característica específica ou condição comercial diferenciada."],
    ["Arbitragem", "Relação entre mercados ou contratos usada para comparar preços e identificar diferenças de valor."],
    ["Bolsa de Londres", "Mercado onde são negociados os contratos futuros de Robusta da ICE Futures Europe, referência internacional para esse café."],
    ["CCCV", "Centro do Comércio de Café de Vitória, referência tradicional de preços do mercado físico no Espírito Santo."],
    ["Conilon", "Nome usado no Brasil para materiais de Coffea canephora cultivados principalmente no Espírito Santo, Rondônia e Bahia."],
    ["Contrato futuro", "Compromisso padronizado de compra ou venda para uma data futura, negociado em bolsa."],
    ["Diferencial", "Diferença negociada entre o preço do café físico e uma referência, normalmente a bolsa."],
    ["Estoque", "Quantidade de café disponível e ainda não consumida, exportada ou comercializada."],
    ["Floração", "Etapa em que o cafeeiro floresce. Sua intensidade e uniformidade ajudam a indicar o potencial da próxima safra."],
    ["ICE Robusta", "Contrato futuro de café Robusta negociado em Londres e utilizado como referência internacional de preço."],
    ["Liquidez", "Facilidade de comprar ou vender sem provocar grande alteração no preço."],
    ["Margem", "Diferença entre o preço recebido e o custo considerado para produzir ou comercializar o café."],
    ["Mercado físico", "Negociação real do café disponível, com definição de qualidade, volume, local, prazo e preço."],
    ["Oferta", "Quantidade de café disponível ou esperada no mercado em determinado período."],
    ["Prêmio", "Valor positivo acrescentado à referência de mercado por qualidade, origem, disponibilidade ou condição de entrega."],
    ["Safra", "Ciclo de produção e colheita do café em determinada origem e período."],
    ["Spread", "Diferença entre dois preços, mercados, qualidades, origens ou vencimentos."],
    ["Suporte", "Faixa de preço em que a pressão compradora pode aumentar e dificultar novas quedas."],
    ["Volatilidade", "Intensidade e frequência das oscilações de preço em determinado período."],
  ];
  const letters = [...new Set(terms.map(([term]) => term[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()))];
  function goToLetter(letter) {
    document.getElementById(`glossary-${letter}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return <main className="labp-page"><div className="labp-page-head"><button className="labp-back" onClick={() => navigate("back")}>← Voltar</button><span className="labp-eyebrow">BIBLIOTECA PREMIUM</span><h1>Termos do mercado de café</h1><p>Uma consulta rápida, em ordem alfabética, para entender as palavras usadas nas análises.</p></div><div className="labp-glossary-index">{letters.map(letter => <button key={letter} onClick={() => goToLetter(letter)}>{letter}</button>)}</div><div className="labp-glossary-list">{terms.map(([term, definition]) => { const letter=term[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase(); return <article className="labp-glossary-card" id={`glossary-${letter}`} key={term}><h2>{term}</h2><p>{definition}</p></article>; })}</div></main>;
}

function EvidencePage({ current, navigate }) {
  const title = "El Niño acende alerta para a próxima florada do café";
  const text = "Um novo relatório da IMBR Agro indica que o maior risco do El Niño para a safra 2026/27 pode não estar no volume total de chuva, mas na sua distribuição durante as fases mais sensíveis da produção. Novembro aparece como o período de maior atenção para o calendário agrícola.";
  const image = evidenciaElnino;
  const link = "https://conexaosafra.com/agronegocio/el-nino-na-safra-2026-2027-saiba-como-ficarao-as-chuvas-em-cada-regiao-e-qual-sera-o-mes-mais-critico/";
  const sourceLabel = "Fonte: IMBR Agro • NOAA • ERA5 • Relatório publicado em 30/07/2026";
  const layers = [
    [
      "O que mostra",
      "O estudo projeta um comportamento irregular das chuvas em diferentes regiões do Brasil. Para o Sudeste, onde se concentra grande parte da produção de café, o alerta está na possibilidade de períodos secos justamente durante fases decisivas do ciclo produtivo.",
    ],
    [
      "Por que importa",
      "No café, a produtividade depende menos do volume acumulado de chuva e mais da regularidade das precipitações. Florada, pegamento dos frutos e enchimento dos grãos podem ser afetados por poucos dias de déficit hídrico.",
    ],
    [
      "Como se conecta",
      "Essa é uma das razões pelas quais o mercado acompanha o clima muitos meses antes da colheita. Quando aumenta o risco para a próxima safra, a percepção sobre a oferta futura também muda, podendo influenciar a formação dos preços antes mesmo de qualquer perda confirmada.",
    ],
    [
      "O que observar",
      "Além das próximas atualizações dos modelos climáticos para setembro, outubro e novembro, vale acompanhar os relatos de florada nas principais regiões produtoras. Muitas vezes, os primeiros sinais de estresse hídrico aparecem no campo antes de serem refletidos nos relatórios oficiais.",
    ],
  ];

  return (
    <main className="labp-page">
      <div className="labp-page-head">
        <button className="labp-back" onClick={() => navigate("back")}>← Voltar</button>
        <span className="labp-eyebrow">EVIDÊNCIAS</span>
        <h1>A prova por trás da leitura</h1>
      </div>

      <section className="labp-evidence-compact">
        <a
          className="labp-evidence-thumb labp-evidence-thumb-link"
          href={image}
          target="_blank"
          rel="noreferrer"
          aria-label="Ampliar evidência"
        >
          <img src={image} alt="Mapa climático do Brasil com contraste entre áreas úmidas e secas" />
        </a>

        <div>
          <span className="labp-eyebrow">EVIDÊNCIA SELECIONADA</span>
          <h2>{title}</h2>
          <p>{text}</p>
          <small style={{ display: "block", marginTop: 10, color: "var(--premium)", lineHeight: 1.45 }}>
            {sourceLabel}
          </small>
          {link && (
            <a
              className="labp-gold-button"
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", marginTop: 12, textDecoration: "none" }}
            >
              Fonte original →
            </a>
          )}
        </div>
      </section>

      <HorizontalNavigator ariaLabel="Análise da evidência">
        <div className="labp-evidence-analysis">
          {layers.map(([label, body], index) => (
            <article key={label}>
              <span className="labp-eyebrow">0{index + 1}</span>
              <strong>{label}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </HorizontalNavigator>
    </main>
  );
}

export default function PremiumPreview({ onBackToBasic }) {
  const [page, setPage] = React.useState("home");
  const [historyPages, setHistoryPages] = React.useState([]);
  const [market, setMarket] = React.useState({
    current: {},
    history: [],
  });
  const [dollar, setDollar] = React.useState(0);
  const [dollarPrevious, setDollarPrevious] = React.useState(0);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [moreOpen, setMoreOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("pt");

  React.useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      const host = document.getElementById("google_translate_element");
      if (!host || host.dataset.ready === "true") return;
      host.dataset.ready = "true";
      new window.google.translate.TranslateElement(
        { pageLanguage: "pt", includedLanguages: "pt,en", autoDisplay: false, multilanguagePage: true },
        "google_translate_element"
      );
    };
    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
      return undefined;
    }
    if (!document.querySelector('script[data-conilon-translate="true"]')) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.dataset.conilonTranslate = "true";
      document.body.appendChild(script);
    }
    return undefined;
  }, []);

  function changeLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === "en" ? "en" : "pt-BR";
    const target = nextLanguage === "en" ? "en" : "pt";
    const apply = (attempt = 0) => {
      const combo = document.querySelector("select.goog-te-combo");
      if (combo) {
        combo.value = target;
        combo.dispatchEvent(new Event("change", { bubbles: true }));
        return;
      }
      if (attempt < 20) window.setTimeout(() => apply(attempt + 1), 250);
    };
    apply();
  }

  React.useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";

    fetch(`${SHEET_URL}&t=${Date.now()}`)
      .then((response) => {
        if (!response.ok) throw new Error("Falha ao carregar a planilha");
        return response.text();
      })
      .then((text) => {
        const rows = parseCSV(text);
        const headers = rows[0] || [];
        const data = rows
          .slice(1)
          .map((columns) => normalizeRow(headers, columns));

        setMarket({
          current: data[0] || {},
          history: data
            .filter(
              (item) =>
                getField(item, ["data_grafico_cooabriel"]) &&
                getField(item, ["valor_grafico_cooabriel"])
            )
            .map((item) => ({
              day: getField(item, ["data_grafico_cooabriel"]),
              price: num(getField(item, ["valor_grafico_cooabriel"])),
            }))
            .filter((item) => item.price)
            .slice(-30),
        });
      })
      .catch(console.error);

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
      .then((response) => response.json())
      .then((data) => setDollar(Number(data?.USDBRL?.bid || 0)))
      .catch(() => {});

    fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/2")
      .then((response) => response.json())
      .then((data) => {
        const ordered=[...(Array.isArray(data)?data:[])].sort((a,b)=>Number(a.timestamp)-Number(b.timestamp));
        setDollarPrevious(ordered.length>1?Number(ordered.at(-2)?.bid||ordered.at(-2)?.ask||0):0);
      })
      .catch(() => {});
  }, []);

  function navigate(destination) {
    if (destination === "back") {
      const previous = historyPages.at(-1) || "home";
      setHistoryPages((items) => items.slice(0, -1));
      setPage(previous);
    } else if (destination !== page) {
      const sameFlow =
        (page.startsWith("reading-") && destination.startsWith("reading-")) ||
        (page.startsWith("fact-") && destination.startsWith("fact-")) ||
        (page.startsWith("evidence-") && destination.startsWith("evidence-"));
      if (!sameFlow) setHistoryPages((items) => [...items, page]);
      setPage(destination);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const current = market.current || {};
  const date = formatDate(
    getField(current, [
      "data",
      "date",
      "data_atualizacao",
      "atualizacao",
    ])
  );

  const vectorContext = buildVectorContext(
    current,
    market.history,
    dollar,
    dollarPrevious
  );

  let content = (
    <Home
      current={current}
      history={market.history}
      dollar={dollar}
      date={date}
      vectorContext={vectorContext}
      navigate={navigate}
    />
  );

  if (page === "coffee") content = <CoffeePage current={current} history={market.history} navigate={navigate} />;

  if (page === "vectors") {
    content = (
      <VectorsPage
        current={current}
        history={market.history}
        dollar={dollar}
        dollarPrevious={dollarPrevious}
        navigate={navigate}
      />
    );
  }

  if (page === "news") content = <FactsPage current={current} navigate={navigate} />;
  if (page === "library") content = <LibraryPage navigate={navigate} />;
  if (page.startsWith("fact-")) content = <FactDetailPage current={current} index={Number(page.split("-")[1])} navigate={navigate} />;
  if (page === "reading-full") content = <ReadingPage current={current} vectorContext={vectorContext} index={0} navigate={navigate} />;


  if (page === "evidence") {
    content = <EvidencePage current={current} navigate={navigate} />;
  }

  return (
    <>
      <style>{premiumCss}</style>
      <div id="google_translate_element" className="notranslate" translate="no" />

      <Header
        page={page}
        navigate={navigate}
        date={date}
        onSearch={() => setSearchOpen(true)}
        language={language}
        onLanguage={changeLanguage}
      />

      {content}

      {searchOpen && (
        <div className="labp-search">
          <div className="labp-search-box">
            <button onClick={() => setSearchOpen(false)}>×</button>
            <input
              autoFocus
              placeholder="O que você quer entender no Premium?"
            />
            <p>
              Pesquise por margem, vetores, notícias ou evidências.
            </p>
          </div>
        </div>
      )}

      {moreOpen && (
        <div className="labp-more-sheet" onClick={() => setMoreOpen(false)}>
          <div className="labp-more-panel" onClick={(event) => event.stopPropagation()}>
            <div className="labp-more-panel-head">
              <strong>Mais recursos Premium</strong>
              <button onClick={() => setMoreOpen(false)}>×</button>
            </div>
            <div className="labp-more-actions">
              <button onClick={() => { navigate("evidence"); setMoreOpen(false); }}>
                Evidências — Quadro de investigação
              </button>
              <button onClick={() => { navigate("library"); setMoreOpen(false); }}>
                Biblioteca Premium
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="labp-bottom">
        {[
          ["home", "Hoje"],
          ["coffee", "Meu café"],
          ["vectors", "Vetores"],
          ["news", "Fatos"],
        ].map(([id, label]) => (
          <button
            key={id}
            className={page === id ? "active" : ""}
            onClick={() => navigate(id)}
          >
            {label}
          </button>
        ))}
        <button
          className={page === "evidence" || page === "library" ? "active" : ""}
          onClick={() => setMoreOpen(true)}
        >
          Mais
        </button>
        <button
          type="button"
          className="notranslate"
          translate="no"
          onClick={() => onBackToBasic?.()}
          aria-label="Voltar ao aplicativo Básico"
        >
          ← Básico
        </button>
      </nav>
    </>
  );
}
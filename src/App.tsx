import { Component, createEffect, createSignal,  JSXElement, on, Show } from 'solid-js';
import styles from './App.module.css';

interface EgProps {
	eg?:boolean;
	cb?:Function;
}

const winnerWinnerChickenDinner = () =>{
	try{
	var duration = 1 * 1000;
	var end = Date.now() + duration;

	(function frame() {
		// launch a few confetti from the left edge
		//@ts-ignore
		confetti({
			particleCount: 7,
			angle: 60,
			spread: 55,
			origin: { x: 0 }
		});
		// and launch a few from the right edge
		//@ts-ignore
		confetti({
			particleCount: 7,
			angle: 120,
			spread: 55,
			origin: { x: 1 }
		});

		// keep going until we are out of time
		if (Date.now() < end) {
			requestAnimationFrame(frame);
		}
	}());
	}
	catch{

	}
}

const Eg: Component<EgProps> = ({eg=false, cb=()=>{}, ...props}:any) => {
	const [clicked, setClicked] = createSignal(false);
	const [egStyle, setEgStyle] = createSignal(styles.shrinkOut);
	const [shieldStyle, setShieldStyle] = createSignal(styles.fadeIn + " " + styles.shield);
	const [symbol, setSymbol] = createSignal("❌");
	createEffect(on(clicked,()=>{
		if(clicked()){
			cb(eg);
			setSymbol(eg ? "🥚" : "❌");
			setShieldStyle(styles.fadeOut);
			setEgStyle(styles.popIn + " " + styles.icon);
		}
	}));
	return (
		<div onclick={()=>setClicked(true)}class={styles.spoiler}>
			<div class={egStyle()}>{symbol()}</div>
			<div class={shieldStyle()}></div>
		</div>
	);
}


const createEg = ({height, width, position, setScore=(p:any)=>{}, onComplete=()=>{}}:{height:number, width:number, position:[number, number], setScore:any, onComplete:any}) => {
	const eg = {
		grid:<></>,
		text:"",
		complete: false
	}

	const inc = (match:boolean) => {
		if(eg.complete)return;
		setScore((prev:any)=>prev+1);
		if(match){
			eg.complete=true;
			winnerWinnerChickenDinner();
			onComplete(true);
		}
	}

	const egRows = [] as JSXElement[];
	for(var y=0; y<height; y++){
		const egRow = {element:()=><div class={styles.egRow}>{egRow.children}</div>, children:[] as JSXElement[]};
		for(var x=0; x<width; x++){
			const isEg=(position[0]===x && position[1]===y);
			egRow.children.push(<Eg cb={inc} eg={isEg} />);
			const sym=isEg ? ":egg:" : ":x:";
			eg.text+=`||${sym} || `;
		}
		eg.text+="\n";
		egRows.push(egRow.element());
	}
	eg.grid = <div class={styles.egGrid}>{egRows}</div>;
	return(eg);
}

const App: Component = () => {
	const [titleEgStyle, setTitleEgStyle] = createSignal(styles.popIn);
	const [titleEgTextStyle, setTitleEgTextStyle] = createSignal(styles.fadeOut);

	const handleEnter = ()=>{
		setTitleEgStyle(styles.shrinkOut);
		setTitleEgTextStyle(styles.fadeIn)
	}
	const handleLeave = ()=>{
		setTitleEgTextStyle(styles.fadeOut)
		setTitleEgStyle(styles.popIn);
	}

	const [height, setHeight] = createSignal(6);
	const [width, setWidth] = createSignal(6);
	const [score, setScore] = createSignal(0);
	const [complete, setComplete] = createSignal(false);
	const [flip, setflip] = createSignal(false);
	const toggle = ()=>{
		setflip(prev=>!prev);
	}
	const [Eg, setEg] = createSignal({grid:[] as JSXElement[] | JSXElement, text:""});
	const generate =  () => {
		const position = [Math.floor(Math.random()*width()), Math.floor(Math.random()*height())] as [number, number];
		setComplete(false);
		setScore(0);
		setEg(createEg({height:height(), width:width(), position, setScore, onComplete:setComplete}));
	}

	createEffect(on([height, width, flip], generate));

	const [showText, setShowText] = createSignal(false);
	const scale = (func:typeof setHeight, increment:number) => {
		func(prev=>prev+increment);
	}

	const copyEg = ()=>{
		try{
			if(!navigator.clipboard){
				window.prompt("Copy to clipboard: Ctrl+C, Enter", Eg().text);
			}
			navigator.clipboard.writeText(Eg().text).then(()=>{
				alert("Daily Eg Copied to Clipboard!")
			});
		}catch{
			try{
				window.prompt("Copy to clipboard: Ctrl+C, Enter", Eg().text);
			}
			catch{
			}
		}
	}

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div>
					<h1 class={styles.h1}>Daily {
					<div class={styles.titleEg} onpointerenter={handleEnter} onpointerleave={handleLeave}>
						<div class={titleEgStyle()}>🥚</div>
						<div class={titleEgTextStyle()}>:eg:</div>
					</div>
				}</h1>
				</div>
      </header>
			<div class={styles.body}>
				<div class={styles.row}>
					<div class={styles.Controls}>
						<div>
							<span class="material-icons" onclick={()=>{scale(setHeight,1)}}>keyboard_arrow_up</span>
							<div>
								<label for="height">Height</label>
								<input id="height" type="number"  maxlength={2} value={height()} onchange={({currentTarget:{valueAsNumber}})=>{
									if(valueAsNumber>20){
										setHeight(20);
										return;
									}
									if(valueAsNumber){
										setHeight(valueAsNumber);
									}
									}}/>
							</div>
							<span class="material-icons" onclick={()=>{scale(setHeight,-1)}}>keyboard_arrow_down</span>
							
						</div>{/* Height */}
						<div>
						<span class="material-icons" onclick={()=>{scale(setWidth,1)}}>keyboard_arrow_up</span>
							<div>
								<label for="width">Width</label>
								<input id="width" type="number" maxlength={2} value={width()} onchange={({currentTarget:{valueAsNumber}})=>{
									if(valueAsNumber>20){
										setWidth(20);
										return;
									}
									setWidth(valueAsNumber);
									}}/>
							</div>
							<span class="material-icons" onclick={()=>{scale(setWidth,-1)}}>keyboard_arrow_down</span>
						</div>{/* Width */}
					</div> {/* Controls */}
					<div class={styles.EgButton} onclick={toggle}>
						<div class={styles.EgImage}>🥚</div>
						<div class={styles.EgIcon}><span class="material-icons">refresh</span></div>
					</div>{/* EgButton */}
				</div>
				<div class={styles.Content}>
					<div class={styles.CopyPasta} onClick={copyEg}><h3>{<span class="material-icons">content_copy</span>} Copypasta</h3></div>
					<div>{`${complete() ? "Final" : ""} Score: ${score()}`}</div>
					{Eg().grid}
					<div class={styles.PastaWrapper}>
						<div class={styles.IconButton} onClick={()=>{setShowText((prev)=>!prev)}}><h3>{<span class="material-icons">{showText() ? "visibility" : "visibility_off"}</span>} Pasta Text</h3></div>
						<Show when={showText()}>
							<textarea value={Eg().text}>{Eg().text}</textarea>
						</Show>
					</div>
				</div>
			</div> {/* Body */}
    </div>
  );
};

export default App;

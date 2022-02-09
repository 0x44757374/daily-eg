import { batch, Component, createEffect, createMemo, createSignal,  JSXElement, on, Show } from 'solid-js';
import {  food,  symbols,  } from 'discord-emoji';
import styles from './App.module.css';

interface EgProps {
	eg?:boolean;
}

const Eg: Component<EgProps> = ({eg=false,...props}:any) => {
	const [clicked, setClicked] = createSignal(false);
	const [egStyle, setEgStyle] = createSignal(styles.shrinkOut);
	const [shieldStyle, setShieldStyle] = createSignal(styles.fadeIn + " " + styles.shield);
	const [symbol, setSymbol] = createSignal(symbols.x);
	createEffect(on(clicked,()=>{
		if(clicked()){
			setSymbol(eg ? food.egg : symbols.x);
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


const createEg = ({height, width, position}:{height:number, width:number, position:[number, number]}) => {
	let egString = "";
	const egRows = [] as JSXElement[];
	for(var y=0; y<height; y++){
		const egRow = {element:()=><div class={styles.egRow}>{egRow.children}</div>, children:[] as JSXElement[]};
		for(var x=0; x<width; x++){
			const isEg=(position[0]===x && position[1]===y);
			egRow.children.push(<Eg eg={isEg} />);
			const sym=isEg ? ":egg:" : ":x:";
			egString+=`||${sym}||`;
		}
		egString+="\n";
		egRows.push(egRow.element());
	}

	return({
		grid:<div class={styles.egGrid}>{egRows}</div>,
		text:egString
	});
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
	const [flip, setflip] = createSignal(false);
	const toggle = ()=>{
		setflip(prev=>!prev);
	}
	const [Eg, setEg] = createSignal({grid:[] as JSXElement[] | JSXElement, text:""});
	const generate =  () => {
		const position = [Math.floor(Math.random()*width()), Math.floor(Math.random()*height())] as [number, number];
		// setEgPos(position);
		setEg(createEg({height:height(), width:width(), position}));
	}

	createEffect(on([height, width, flip], generate));

	const [showText, setShowText] = createSignal(true);
	const scale = (func:typeof setHeight, increment:number) => {
		func(prev=>prev+increment);
	}

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div>
					<h1 class={styles.h1}>Daily {
					<div class={styles.titleEg} onpointerenter={handleEnter} onpointerleave={handleLeave}>
						<div class={titleEgStyle()}>{food.egg}</div>
						<div class={titleEgTextStyle()}>:eg:</div>
					</div>
				} Generator</h1>
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
						<div class={styles.EgImage}>{food.egg}</div>
						<div class={styles.EgIcon}><span class="material-icons">refresh</span></div>
					</div>{/* EgButton */}
				</div>
				<div class={styles.Content}>
					<div class={styles.CopyPasta} onClick={()=>{
						// try{
						// 	navigator.clipboard.writeText(Eg().text);
						// 	alert("Daily Eg Copied to Clipboard")
						// }catch{
							try{
								window.prompt("Copy to clipboard: Ctrl+C, Enter", Eg().text);
							}
							catch{
							}
						// }
					}}><h3>{<span class="material-icons">content_copy</span>} Copypasta</h3></div>
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

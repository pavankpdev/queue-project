import { render } from 'preact';

import preactLogo from './assets/preact.svg';
import './style.css';

export function App() {

	const onSubmit = (e) => {
		e.preventDefault()
		const fd = new FormData(e.target)

		console.log(fd.get('email'))
	}

	return (
		<div>
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>Enter your email and hit receive</h1>
			<section>
				<form onSubmit={onSubmit}>
					<input
						type={'email'}
						placeholder={'myemail@email.com'}
						name={'email'}
					/>
					<button
						type={'submit'}
					>
						Receive email
					</button>
				</form>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

render(<App />, document.getElementById('app'));

import React, { Component } from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import ChoseeFont from './CvForm/ChoseeFont';
import ChoseeColor from './CvForm/ChoseeColors';
import ChoseeTheme from './CvForm/ChoseeTheme';
import ChooseImage from './CvForm/ChooseImage';
import CvForm from './CvForm/CvForm';
import PreviewPersonalData from './CvPreview/Preview-PersonalData';
import PreviewSummary from './CvPreview/PreviewSummary';
import PreviewExperience from './CvPreview/PreviewExperience';
import PreviewEducation from './CvPreview/PreviewEducation';
import PreviewLanguages from './CvPreview/PreviewLanguages';
import PreviewIt from './CvPreview/PreviewIt';
import PreviewVariouSkills from './CvPreview/PreviewVariouSkills';
import Footer from './Footer/Footer';
import Hero from './Intro/Hero';
import MetaTags from 'react-meta-tags';

import './../scss/main.css';

class App extends Component {
	constructor(props){
		super(props);

		this.updateState = this.updateState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageUpload = this.handleImageUpload.bind(this);
		this.handleChangeFontCookie = this.handleChangeFontCookie.bind(this);
		this.handleChangeFontAnnie = this.handleChangeFontAnnie.bind(this);
		this.handleChangeFontPhilosopher = this.handleChangeFontPhilosopher.bind(this);
		this.HandleGreenLimeClick = this.HandleGreenLimeClick.bind(this);
		this.HandleBlueLimeClick = this.HandleBlueLimeClick.bind(this);
		this.HandlePinkGreyClick = this.HandlePinkGreyClick.bind(this);
		this.handleChangeThemeDots = this.handleChangeThemeDots.bind(this);
		this.handleChangeThemeStripes = this.handleChangeThemeStripes.bind(this);
		this.handleChangeThemeZigZag = this.handleChangeThemeZigZag.bind(this);
		this.updateJobState = this.updateJobState.bind(this);
		this.updateEducationState = this.updateEducationState.bind(this);

		this.updateLanguagesState = this.updateLanguagesState.bind(this);
		this.updateItState = this.updateItState.bind(this);
		this.updateVariouSkillsState = this.updateVariouSkillsState.bind(this);


		this.state = {
			file: '',
			imagePreviewUrl: '',
			fontOption:'philosopher',
			colorOption: 'black-pink-grey',
			themeOption: 'dots',
			listJobs: [],
			listEducation: [],
			listLanguages: [],
			listIt: [],
			listVariouSkills: []
		};
	}
	handleChangeFontCookie(e){
		e.preventDefault();
		this.setState({
			fontOption: 'cookie'
		})
	}
	handleChangeFontAnnie(e){
		e.preventDefault();
		this.setState({
			fontOption: 'annie'
		})
	}
	handleChangeFontPhilosopher(e){
		e.preventDefault();
		this.setState({
			fontOption: 'philosopher'
		})
	}

	HandleGreenLimeClick(e){
		e.preventDefault();
		this.setState({
			colorOption: 'red-green-lime'
		})
	}
	HandleBlueLimeClick(e){
		e.preventDefault();
		this.setState({
			colorOption: 'black-blue-lime'
		})
	}
	HandlePinkGreyClick(e){
		e.preventDefault();
		this.setState({
			colorOption: 'black-pink-grey'
		})
	}
	handleChangeThemeZigZag(e){
		e.preventDefault();
		this.setState({
			themeOption: 'zigZag'
		})
	}
	handleChangeThemeStripes(e){
		e.preventDefault();
		this.setState({
			themeOption: 'stripes'
		})
	}
	handleChangeThemeDots(e){
		e.preventDefault();
		this.setState({
			themeOption: 'dots'
		})
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log('handle uploading-', this.state.file);
	}
	handleImageUpload(e) {
		e.preventDefault();
		let reader = new FileReader();
    let file = e.target.files[0];
		reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
		reader.readAsDataURL(file)
	}
	updateState(prop, value) {
		const newState = {};
		newState[prop] = value;
		this.setState(newState);
	}
	updateJobState(myExperience){
		this.setState(prevState => ({
    	listJobs: [...prevState.listJobs, myExperience]
		}))
	}
	updateEducationState(myEducation){
		this.setState(prevState => ({
    	listEducation: [...prevState.listEducation, myEducation]
		}))
	}
	updateLanguagesState(myLanguages){
		this.setState(prevState => ({
			listLanguages: [...prevState.listLanguages,myLanguages]
		}))
	}
	updateItState(myIt){
		this.setState(prevState => ({
			listIt: [...prevState.listIt,myIt]
		}))
	}
	updateVariouSkillsState(myVariouSkills){
		this.setState(prevState => ({
			listVariouSkills: [...prevState.listVariouSkills,myVariouSkills]
		}))
	}
  render() {
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<div className="background__photo-preview" style={{backgroundImage: `url(${imagePreviewUrl})`}}></div>);
		}
    return (
			<div>
				<MetaTags>
					<meta name="description" content="Creación de una SPA sencilla con React. Refactorización de código heredado del curriculum interactivo de nuestras compañeras de Adalab del grupo clarke-s2-generatrix e integración de React." />
					<meta property="og:title" content="Genera3.0" />
					<meta property="og:image" content="../../images/cover_mobile2.png" />
				</MetaTags>
				<Header />
				<main>
					<Hero />
					<Intro />
					<section className="block__cv" id="design">
						<section className="section__creation">
							<h2 className="creation__title">Configura tu currículum</h2>
							<div className="container__creation">
								<section className="creation__design">
									<ul className="creation__design__options">
										<ChoseeFont
											onClickCookie = {this.handleChangeFontCookie}
											onClickAnnie = {this.handleChangeFontAnnie}
											onClickPhilosopher = {this.handleChangeFontPhilosopher}
										/>
										<ChoseeColor
											onClickGreenLime = {this.HandleGreenLimeClick}
											onClickBlueLime = {this.HandleBlueLimeClick}
											onClickPinkGrey = {this.HandlePinkGreyClick}
										/>
										<ChoseeTheme
											onClickDots= {this.handleChangeThemeDots}
											onClickStripes = {this.handleChangeThemeStripes}
											onClickZigZag = {this.handleChangeThemeZigZag}
										/>
									</ul>
								</section>
								<ChooseImage
									onSubmitFunction = {(e)=>this.handleSubmit(e)}
									onChangeUploadImage = {(e)=>this.handleImageUpload(e)}
									newImagePreview = {$imagePreview}
								/>
								<CvForm
									updatePreview={this.updateState}
									updateJobsPreview={this.updateJobState}
									updateEducationPreview ={this.updateEducationState} updateLanguagesPreview ={this.updateLanguagesState}
									updateItPreview={this.updateItState}
									updateVariouSkillsPreview={this.updateVariouSkillsState}
								/>
							</div>
						</section>
						<section className="section__preview" id="preview">
							<h2 className="preview__title"> Previsualización </h2>
							<div className={`showpreview ${this.state.fontOption} ${this.state.colorOption} ${this.state.themeOption}`}>
								<div className="container__preview--intro preview-div">
									<div className="container__preview--photo">
										<div className="container__photo">
											{$imagePreview}
										</div>
									</div>
									<PreviewPersonalData
										name={this.state.name}
										surname={this.state.surname}
										profession={this.state.profession}
										telephone={this.state.telephone}
										date={this.state.date}
										email={this.state.email}
										address={this.state.address}
									/>
								</div>
								<PreviewSummary
									summary={this.state.summary}
									twitter={this.state.twitter}
									linkedin={this.state.linkedin}
									github={this.state.github}
								/>
								<PreviewExperience
									listJobs ={this.state.listJobs}
								/>
								<PreviewEducation
									listEducation ={this.state.listEducation}
								/>
								<div className="container__preview--skills">
									<div className="preview__skills preview-text">
										<PreviewLanguages listLanguages={this.state.listLanguages}
										/>
										<PreviewIt listIt={this.state.listIt}
										/>
										<PreviewVariouSkills listVariouSkills={this.state.listVariouSkills}
										/>
									</div>
								</div>
							</div>
						</section>
					</section>
				</main>
				<Footer />
			</div>
    );
  }
}

export default App;

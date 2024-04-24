import React from 'react'

import { Link, Navigate } from 'react-router-dom'

export default class TrackUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.track,
            formNum: 0,
            fileName: '',
            submitted: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateAudio = this.updateAudio.bind(this)
        this.updateImage = this.updateImage.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateAudio(e, file) {
        const reader = new FileReader();

        if (file === undefined) {
            file = e.currentTarget.files[0];
        }
        this.setState({ fileName: file.name })

        reader.onloadend = () => {
            this.setState({ audioUrl: reader.result, audioFile: file });

        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ audioUrl: "", audioFile: null });
        }
        this.setState({ formNum: 1 })
    }

    updateImage(e, file) {
        const reader = new FileReader();

        if (file === undefined) {
            file = e.currentTarget.files[0];
        }
        reader.onloadend = () =>
            this.setState({
                photoUrl: reader.result,
                imageFile: file
            });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({
                photoUrl: currentUser.avatarUrl,
                imageFile: null
            });
        }
    }

    handleSubmit(e) {
        const data = new FormData();


        data.append('track[title]', this.state.title);
        data.append('track[description]', this.state.description);
        data.append('track[artistId]', this.state.artistId);
        if (this.state.imageFile) {
            data.append('track[image]', this.state.imageFile);
        }
        if (this.state.audioFile) {
            data.append('track[audio]', this.state.audioFile);
        }

        this.props.uploadTrack(data)

        this.setState({ submitted: true }, () => alert(`You have successfully uploaded.`))



    }

    firstPage() {
        return (

            <div className="first-form-container">

                <div className='track-form-center-ele'>
                    <h1 className='drag-drop-text'> {`Upload your tracks & albums here`}</h1>
                    <label className='audio-file-custom-input'>

                        <input
                            className='audio-file-input'
                            type="file"
                            accept='audio/*'
                            onChange={(e) => this.updateAudio(e)}
                        /> Upload
                    </label>
                    <br />
                </div>
            </div>
        )
    }
    handleBack() {
        this.setState({ formNum: 0 })
    }
    secondPage() {

        let dispImg;
        if (this.state.imageFile) {
            dispImg = <img className="track-form-album-art" src={this.state.photoUrl} />
        }
        else {
            dispImg = <div className="placeholder-album-art" />
        }
        return (

            <div className="large-second-form-container">
                <div className="first-form-container"></div>
                <div className="sf-replace-container">
                    <div className="smaller">
                        <div className='learn-more-audio'>
                            <p>Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.</p>
                            <button className="replace-file-btn"
                                onClick={this.handleBack}
                            >Replace file</button>
                        </div>
                    </div>
                    <div className="track-progress-bar">
                        <p className="filename"> {this.state.fileName}</p>
                        <p className="ready-post"> Save and post this track.</p>
                    </div>
                    <div className="second-form-container">
                        <div className="track-form-image-container">
                            <div className="sf-center-content">
                                <div className="image-container">
                                    {dispImg}
                                    {/* <button className="change-image-btn">Upload Image</button> */}
                                    <label className="change-image-btn" >Upload image
                                        <input
                                            type="file"
                                            id="init-image-input"
                                            accept="image/*"
                                            className="init-image-input"
                                            onChange={(e) => this.updateImage(e)}
                                        />
                                    </label>
                                </div>

                                <div className="track-form-text-input-container">
                                    <label className="sf-title-label">Title
                                        <input
                                            type="text"
                                            value={this.state.title}
                                            onChange={this.update('title')}
                                            className="trackform-title"
                                        />
                                    </label>

                                    <br />
                                    <label>Description
                                        <br />
                                        <textarea
                                            value={this.state.description}
                                            onChange={this.update('description')}
                                            className="track-form-description"
                                        />
                                    </label>
                                    <br />

                                    <button className="track-submit-btn"
                                        type="submit"
                                        onClick={this.handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        if (this.state.formNum === 0) {
            return (
                <>
                    <div className="outer-track-form-container">
                        <div className="track-form-container">
                            {this.firstPage()}
                        </div>
                    </div>
                </>
            )
        }
        else if (this.state.formNum === 1) {
            // debugger
            return (
                <div className="outer-track-form-container">
                    {this.state.submitted ? <Link to={`tracks/${this.state.artistId}`} /> : <></>}
                    <div className="track-form-container">
                        {this.secondPage()}
                    </div>
                </div>
            )
        }
        else if (this.state.submitted) {
            return <Navigate to='/' />
        }
    }
}
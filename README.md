SONAR
=====
[Sonar](https://appsonar.herokuapp.com/#/) (currently not avaliable for live) is a web page, clone of SoundCloud built with Ruby on Rails, ReactJS, and Redux. On Sonar, artists are able to upload their tracks for the world to stream, share, and like. 

![Sonar Home Page](app/assets/images/homepage2.png "Sonar Home")


## Technologies

Sonar was built using Rails for the backend, React/Redux for the frontend. Database was managed by PostgreSQL and Wavesurfer.js library which is built on top the Web Audio API and HTML5 Canvas to build the web audio waves.

## Features

### Track Show & Waveform
<!-- waveform.jsx -->

* After setting up the `waveform` using the wavesurfer library, audio can be played and stopped.

![Sonar Track Page](app/assets/images/trackShow2.png "Sonar Track")


### Search
<!-- search.jsx -->

* Search functionality works as the user clicks on the bar and the `currList` is set to all of the tracks. To filter the tracks `newList` is filtered and used to update.

```javascript

handleChange(e) {
        let currList = [];
        let newList = [];

        if (e.target.value !== "") {
            currList = this.props.tracks;
            newList = currList.filter((track) => {
                let lowerCaseTrack;
                // ensure of an object
                typeof track == "object"
                // lower case mandatory
                    ? (lowerCaseTrack = track.title.toLowerCase())
                    : (lowerCaseTrack = track.toLowerCase());
                let filter = e.target.value.toLowerCase();

                return lowerCaseTrack.includes(filter);
            });
        } else {
            newList = this.props.tracks;
        }
        this.setState({
            filtered: newList,
        });
    }
```
![Sonar Tracks](app/assets/images/search2.png "Sonar Tracks")

## Future Implementations

* Track Upload (COMPLETED)
* Slider on the home page

_Note: docker-compose run, bundle exec rails server -p 3001_


#### root.html.erb (missing partial error workaround fix)
 `window.currentUser = <%= render("api/users/user.json.jbuilder", user: current_user).html_safe %>`
 Removing the above line from root.html.erb ln:3 is a workaround for jbuilder partial error.


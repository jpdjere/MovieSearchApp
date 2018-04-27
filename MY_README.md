# Movie Search

## Author

* Juan Pablo Djeredjian (https://github.com/jpdjere)

## Description

The app implements a simple movie search app. It was built with a Node.js backend
with the Express framework and a (vanilla) Javascript frontend. The movie data
was initially imported into a NoSQL MongoDB and used with Mongoose.

The app allows to search for a single term or a combination of search terms that
should match the ``originalTitle`` property in each of the data's records. The app
also allows the user to search only for whole words (to prevent matching of
parts of words) and matching the whole sentence (so as to match full titles).

Finally, once the data is retrieved from the online database and displayed in a
list, the user is able to sort the results by name and by year of release.

### Install

On the root of the project, install Node.js dependencies:

```
npm install
```

After installation is finished, run
```
npm start
```

The command will start a local server and you can access the project in your
browser at ``localhost:3000``.

User and password for the movie database are hardcoded into the connection code
in the ``app.js`` file, so there is no need to configure that.

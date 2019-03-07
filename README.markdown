This is a joke, forked from ngerikines/commitment.

It's for hip hop heads, RnB enthusiasts, and rap geniuses. If you would like to contribute, you can select any artist or create a new one, just please make sure there are no expletives.

The old project used Tornado as a backend on a heroku box. There really is no need for a backend since it's all static unless you want constantly updated quotes list. You can use gshuf on MacOS if you install coreutils first: https://github.com/ngerakines/commitment/issues/192

```
git config --global alias.hiphop '!git commit -m "$(gshuf -n 1 ~/Github/HipHopCommits/commit_messages.txt)"'
```

# Topics
-------------------------

## Install Git
## Initialize a repository
## Stage changes
## Commit changes
## Check status
## Show changes in working directory
## Show changes in staging area
## View commit history
## List branches
## Create a branch
## Switch branches
## Merge branches
## Fetch and merge from ## remote
## Unstage changes
## Reset to last commit

# ==============================================================
# 📘 Git Command Documentation (Beginner Friendly, Fully Explained)
# ==============================================================

# Git is a **version control system**.
# It allows developers to:
#   ✅ Keep track of every change made in a project
#   ✅ Go back to older versions if something breaks
#   ✅ Work in teams without overwriting each other’s code
#   ✅ Create multiple versions (branches) of a project safely
#
# Think of Git like a "time machine + teamwork manager" for your code.

# ---------------------------------------------------------------
# 1. Initialize a new Git repository
# ---------------------------------------------------------------
# This sets up Git in your current folder by creating a hidden `.git/` folder.
# That folder stores:
#   - Commit history
#   - Branches
#   - Remote connections
#
# You run this ONCE when you start a project.
# If the project is already cloned from GitHub, you do NOT need this.
#
# Usage:
#   git init
#
# Example:
#   cd my_project
#   git init
#
# After running, your project is now tracked by Git.

# ---------------------------------------------------------------
# 2. Check repository status
# ---------------------------------------------------------------
# This command shows what’s happening in your project right now.
# It tells you:
#   - Which files are new (untracked)
#   - Which files are changed but NOT staged
#   - Which files are staged (ready to commit)
#
# This is the MOST USED Git command when coding.
#
# Usage:
#   git status

# ---------------------------------------------------------------
# 3. Add files to staging area
# ---------------------------------------------------------------
# Staging means “preparing” your changes before committing.
# Without staging, Git won’t save your changes.
#
# Options:
#   git add file.txt     -> Stage only that file
#   git add .            -> Stage ALL changes in the current folder
#
# Example:
#   git add index.html
#   git add .
#
# TIP: Always run `git status` after adding files to confirm.

# ---------------------------------------------------------------
# 4. Commit changes
# ---------------------------------------------------------------
# A commit = a "snapshot" of your code at a moment in time.
# Every commit should have a message describing WHAT you changed.
#
# Usage:
#   git commit -m "Your message here"
#
# Example:
#   git commit -m "Added login page and fixed navbar"
#
# TIP: Write meaningful commit messages so future you (or teammates)
#      can understand what happened in that commit.

# ---------------------------------------------------------------
# 5. View commit history (detailed)
# ---------------------------------------------------------------
# Shows the FULL history of commits in your project.
# Each commit includes:
#   - Unique commit ID (a hash like a1b2c3d…)
#   - Author
#   - Date
#   - Commit message
#
# Usage:
#   git log
#
# TIP: You can scroll with arrow keys, press `q` to exit.

# ---------------------------------------------------------------
# 6. View commit history (compact)
# ---------------------------------------------------------------
# A shorter version of git log, showing each commit in one line.
#
# Usage:
#   git log --oneline
#
# Example output:
#   a1b2c3d Added login feature
#   e4f5g6h Fixed navbar bug
#
# Very useful to quickly see history without too much detail.

# ---------------------------------------------------------------
# 7. Show changes (diff)
# ---------------------------------------------------------------
# Before committing, you can check exactly what changed in your files.
#
# Usage:
#   git diff           -> Show unstaged changes
#   git diff --cached  -> Show staged changes
#
# Example:
#   If you changed "index.html", Git will show:
#     + lines you added (in green)
#     - lines you removed (in red)

# ---------------------------------------------------------------
# 8. Branch management
# ---------------------------------------------------------------
# Branches are like separate workspaces inside your project.
# Example:
#   - master/main branch = stable code
#   - feature branch     = new experiment
#
# Commands:
#   git branch               -> List all branches
#   git branch feature-1     -> Create a new branch called feature-1
#   git checkout feature-1   -> Switch to feature-1
#   git checkout -b feature-2 -> Create and switch to feature-2
#
# TIP: Always create new features on a new branch.
# This avoids breaking your main code.

# ---------------------------------------------------------------
# 9. Merge branches
# ---------------------------------------------------------------
# After finishing work on a branch, merge it into another branch (usually main).
#
# Example:
#   git checkout master
#   git merge feature-1
#
# This takes all commits from "feature-1" and applies them to "master".
#
# ⚠️ Sometimes conflicts happen if both branches changed the same file.
# Git will ask you to fix conflicts manually.

# ---------------------------------------------------------------
# 10. Remote repositories
# ---------------------------------------------------------------
# A remote = a GitHub (or GitLab/Bitbucket) version of your repo.
# It allows you to sync code online.
#
# Usage:
#   git remote set-url origin https://github.com/username/repo.git
#
# Example:
#   git remote set-url origin https://github.com/depressedKarimul/OSTAD-COURSE.git

# ---------------------------------------------------------------
# 11. Push changes
# ---------------------------------------------------------------
# Upload commits from local computer to remote (GitHub).
#
# Usage:
#   git push origin master
#
# Example:
#   git push origin main
#
# Now your teammates (or future you) can see your changes online.

# ---------------------------------------------------------------
# 12. Pull changes
# ---------------------------------------------------------------
# Downloads latest changes from remote and merges them into your branch.
#
# Usage:
#   git pull origin master
#
# Example:
#   git pull origin main
#
# Use this often to stay updated with team changes.

# ---------------------------------------------------------------
# 13. Fetch changes
# ---------------------------------------------------------------
# Similar to `git pull` but DOES NOT merge automatically.
# Fetch just downloads the data so you can review it first.
#
# Usage:
#   git fetch

# ---------------------------------------------------------------
# 14. Undo changes
# ---------------------------------------------------------------
# Sometimes you make mistakes. These commands help undo them.
#
# 1) Unstage a file (keep changes but remove from staging):
#     git restore --staged page-1.txt
#
# 2) Reset to the last commit (delete all local changes!):
#     git reset --hard HEAD
#
# ⚠️ Be careful with reset --hard. You can lose uncommitted work.

# ---------------------------------------------------------------
# ✅ Summary (Most Common Commands)
# ---------------------------------------------------------------
# git init        -> Start tracking project with Git
# git status      -> Check which files changed
# git add         -> Stage files for commit
# git commit      -> Save a snapshot with a message
# git log         -> View full commit history
# git log --oneline -> Compact history view
# git branch      -> List/create branches
# git checkout    -> Switch between branches
# git merge       -> Merge a branch into current
# git push        -> Upload changes to GitHub
# git pull        -> Download + merge from GitHub
# git fetch       -> Download changes without merge
# git restore     -> Unstage file
# git reset       -> Reset project state
#
# 🚀 With these commands, you can fully manage a Git project!

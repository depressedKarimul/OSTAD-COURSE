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



# ===============================
# 📘 Git Command Documentation
# ===============================

# 1. Initialize a new Git repository
# ---------------------------------
# This command creates a new Git repository in the current folder.
# It sets up the `.git` directory which stores all version history.
# Usage:
#   git init
# Example:
#   cd my_project
#   git init
# ---------------------------------
# Command:
# git init


# 2. Check repository status
# ---------------------------------
# Shows the current state of the working directory and staging area.
# It tells which files are:
#   - Untracked (new files)
#   - Modified but not staged
#   - Staged and ready for commit
# Usage:
#   git status
# ---------------------------------
# Command:
# git status


# 3. Add files to staging area
# ---------------------------------
# Moves changes from working directory to staging area.
#   - `.` means add ALL files.
#   - You can also add a specific file:
#       git add filename.txt
# Usage:
#   git add .
# ---------------------------------
# Command:
# git add .


# 4. View commit history (detailed)
# ---------------------------------
# Displays all previous commits with:
#   - Commit ID
#   - Author
#   - Date
#   - Commit message
# Usage:
#   git log
# ---------------------------------
# Command:
# git log


# 5. View commit history (compact)
# ---------------------------------
# Short version of `git log`.
# Each commit appears on a single line with:
#   - Short commit ID
#   - Commit message
# Usage:
#   git log --oneline
# Example Output:
#   a1b2c3d Added login feature
#   e4f5g6h Fixed navbar bug
# ---------------------------------
# Command:
# git log --oneline


# 6. Show staged changes difference
# ---------------------------------
# Displays the difference between staged files and last commit.
#   - To see unstaged changes: `git diff`
#   - To see staged changes:   `git diff --cached`
# Usage:
#   git diff --cached
# ---------------------------------
# Command:
# git diff --cached


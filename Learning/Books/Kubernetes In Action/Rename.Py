import os

def title_case_rename(path):
    for root, dirs, files in os.walk(path, topdown=False):
        # Rename files
        for name in files:
            new_name = name.title()
            if new_name != name:
                os.rename(os.path.join(root, name), os.path.join(root, new_name))

        # Rename directories
        for name in dirs:
            new_name = name.title()
            os.rename(os.path.join(root, name), os.path.join(root, new_name[:-2] + ".md"))

# Use os.getcwd() to get the current working directory
current_directory = os.getcwd()
title_case_rename(current_directory)

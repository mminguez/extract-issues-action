# GitHub Action - Extract Issues
This GitHub action extracts issues from a pull request with labels notifying that the issue should represent a change for a release note.

![Github JavaScript Actions CI/CD](https://github.com/dolittle/extract-issues-action/workflows/Github%20JavaScript%20Actions%20CI/CD/badge.svg)

### Pre requisites
Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#example-workflow) is available below.

For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file)

### Inputs
- `labels` (optional): A comma separated list of labels that this action looks for in the issue. Default is 'bug,feature,breaking-change'

### Outputs
- `issues`: A json string with the issues in this format: { "issue title"{ "reference": "The url", "type": "The type of the issue" }

### Example Workflow
```yaml
on:
  push:
    branches:
    - '**'
  pull_request:
    types: [closed]

name: GitHub action workflow name

jobs:
  context:
    name: Job name
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Extract issues
        uses: dolittle/extract-issues-action@v1
        
```
## Contributing
We're always open for contributions and bug fixes!

### Pre requisites
node <= 12
yarn
git

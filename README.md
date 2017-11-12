# Policr
Policr is a continuous compliance tool for Cloud Infrastructure. This tool helps to implement Test Driven Development for Infrastructure code. Current support target is AWS provider and [Terraform](http://terraform.io) and Cloudformation provisioning tools

[![Build Status](https://travis-ci.org/LoooooKe/policr.svg?branch=develop)](https://travis-ci.org/LoooooKe/policr)
[![codecov](https://codecov.io/gh/LoooooKe/policr/branch/develop/graph/badge.svg)](https://codecov.io/gh/LoooooKe/policr)

## Usage
### tf-plan
To check terraform scripts locally without deploying it to the provider, use the *plan* mode.
Therefore one has to write js tests using mocha testing and chai assertions.

See examples in the test branch: [ Tests ](https://github.com/LoooooKe/policr/tree/develop/examples/)

### tf-state
To check an actual deployment on the provider using the terraform state, one can use the *state* mode.
Tests are also based on mocha testing and chai assertions and are fully compatible with the unit tests from plan mode.

To check terraform scripts locally without deploying it to the provider, user the plan mode. 
Therefore one has to write js tests using mocha testing and chai assertions.

See examples in the test branch: [ Tests ](https://github.com/LoooooKe/policr/tree/develop/examples/)

### aws
todo

### cf
todo

### CLI
    Usage:
       policr.js [OPTIONS] <command> [ARGS]
     
     Options:
       -t, --tests STRING     tests
       -w, --workdir [STRING] workdir (Default is .)
       -h, --help             Display help and usage details
     
     Commands:
       tf-plan, tf-state, aws, cf
       
## Contributing
Contributions to the code, examples, documentation, etc, are very much appreciated. For more information, see the contribution guidelines.

Report issues and bugs directly in this GitHub project.

## Credits
This is a collaboration between the [Scigility](http://www.scigility.com) and [Developers of Swiss Postal IT](http://www.swisspush.org/).

## License
The project is licensed under the Apache License, version 2.0.


/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isFunction = require( '@stdlib/assert-is-function' );
var pkg = require( './../package.json' ).name;
var tryRequire = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var path;
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		path = ( i % 2 === 0 ) ? '@stdlib/assert/is-array' : './../lib';
		out = tryRequire( path );
		if ( !isFunction( out ) ) {
			b.fail( 'should return function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::require', function benchmark( b ) {
	var path;
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		path = ( i % 2 === 0 ) ? '@stdlib/assert/is-array' : './../lib';
		out = require( path ); // eslint-disable-line stdlib/no-dynamic-require
		if ( !isFunction( out ) ) {
			b.fail( 'should return function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

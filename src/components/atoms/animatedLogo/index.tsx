import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function AnimatedLogo() {
	const [activeIndex, setActiveIndex] = useState(0);

	const pontaNariz = [
		'm 39.365332,41.204964 c 1.47873,-0.846893 2.626896,1.200305 1.329303,2.202966 -1.447326,1.118331 -3.694567,0.116847 -4.491772,-1.302135 -0.893384,-1.590457 1.411868,-2.557513 2.748153,-2.208465 1.526436,0.398354 2.050488,2.09366 1.237313,3.369399 -0.819266,1.285371 -2.60036,1.302353 -3.361219,-0.0445 -0.768685,-1.360361 0.185957,-3.33559 1.936938,-2.811539 1.435956,0.429818 1.206048,2.800683 -0.37504,2.587259 -1.408494,-0.190161 -1.186985,-2.323284 0.08309,-2.56211 2.052445,-0.386053 2.633275,3.030624 0.619196,3.482352 -1.690565,0.379344 -2.110278,-2.338266 -0.46866,-2.415953 0.303201,-0.01415 0.525078,0.127 0.658033,0.38899 0.306427,0.603603 0.205105,1.228778 -0.246647,1.7272 -0.204915,0.225893 -0.46599,0.263786 -0.74624,0.175109 -2.03315,-0.644432 -0.193228,-4.076423 1.678525,-2.300508 0.842442,0.79908 0.709447,2.043714 -0.0488,2.842779 -0.84064,0.886285 -2.219185,1.120148 -3.362853,0.772044 -2.193513,-0.667603 -3.013685,-3.96392 -0.659962,-5.027637 1.990659,-0.899613 4.698087,0.858827 4.850159,2.9609 0.09373,1.297756 -1.067465,2.125167 -2.30007,1.867057 -1.399535,-0.293082 -1.910529,-1.718485 -2.091101,-2.954332 -0.05253,-0.359341 0.228522,-0.6146 0.552334,-0.688928 1.215719,-0.278768 3.038831,1.064006 2.030682,2.298487 -0.355654,0.435894 -1.124981,0.950791 -1.715495,0.737452 -0.760875,-0.275226 -1.310353,-1.456177 -1.534928,-2.140297 -0.248852,-0.758434 0.920928,-1.217351 1.170612,-0.45603 0.204855,0.62457 0.515331,1.115944 1.019013,1.547515 -0.209178,-0.03182 -0.418593,-0.06379 -0.62777,-0.09562 0.29276,-0.07605 0.764154,-0.148001 0.604391,-0.471407 -0.119381,-0.241347 -0.599771,-0.232342 -0.801039,-0.186127 0.184102,-0.229561 0.368202,-0.459114 0.552334,-0.688921 0.07904,0.540053 0.187903,1.280182 0.648979,1.648732 0.337947,0.270115 0.637492,0.34288 0.98058,0.0509 0.368319,-0.313338 0.256127,-0.610404 0.06609,-1.007279 -0.397475,-0.829066 -1.496378,-1.513911 -2.437847,-1.407745 -1.400492,0.157634 -1.413129,1.914187 -0.418644,2.597447 0.547521,0.375936 1.303755,0.433318 1.920971,0.195829 0.271727,-0.104377 0.596455,-0.287132 0.760591,-0.542109 0.05988,-0.185895 0.11976,-0.371804 0.179643,-0.557705 -0.660302,-0.452672 -0.827315,-0.495205 -0.500766,-0.127781 -0.248749,0.05837 -0.497493,0.116741 -0.746492,0.175073 0.01778,-0.162667 0.03536,-0.325356 0.05314,-0.488016 0.219343,0.129668 0.438691,0.259328 0.658036,0.388989 0.601842,-0.02844 0.277389,-0.94342 -0.157034,-1.08348 -0.485347,-0.156352 -0.793859,0.04971 -0.816493,0.525057 -0.03592,0.762307 0.838853,1.09885 1.294719,0.489474 1.033128,-1.381215 -1.196132,-2.163827 -2.053168,-0.912103 0.03232,-0.206693 0.0646,-0.413139 0.09688,-0.619578 0.228225,0.569568 0.617373,1.028436 1.188873,1.286877 0.206444,0.09328 0.437435,0.163132 0.663678,0.186789 0.627117,0.06562 0.626495,-0.117692 1.123513,-0.402388 -0.694206,0.397657 -1.444404,-0.600498 -0.743749,-1.001949 v 0',
		'm 39.365332,38.564895 c 1.47873,-0.846893 2.626896,1.200305 1.329303,2.202966 -1.447326,1.118331 -3.694567,0.116847 -4.491772,-1.302135 -0.893384,-1.590457 1.411868,-2.557513 2.748153,-2.208465 1.526436,0.398354 2.050488,2.09366 1.237313,3.369399 -0.819266,1.285371 -2.60036,1.302353 -3.361219,-0.0445 -0.768685,-1.360361 0.185957,-3.33559 1.936938,-2.811539 1.435956,0.429818 1.206048,2.800683 -0.37504,2.587259 -1.408494,-0.190161 -1.186985,-2.323284 0.08309,-2.56211 2.052445,-0.386053 2.633275,3.030624 0.619196,3.482352 -1.690565,0.379344 -2.110278,-2.338266 -0.46866,-2.415953 0.303201,-0.01415 0.525078,0.127 0.658033,0.38899 0.306427,0.603603 0.205105,1.228778 -0.246647,1.7272 -0.204915,0.225893 -0.46599,0.263786 -0.74624,0.175109 -2.03315,-0.644432 -0.193228,-4.076423 1.678525,-2.300508 0.842442,0.79908 0.709447,2.043714 -0.0488,2.842779 -0.84064,0.886285 -2.219185,1.120148 -3.362853,0.772044 -2.193513,-0.667603 -3.013685,-3.96392 -0.659962,-5.027637 1.990659,-0.899613 4.698087,0.858827 4.850159,2.9609 0.09373,1.297756 -1.067465,2.125167 -2.30007,1.867057 -1.399535,-0.293082 -1.910529,-1.718485 -2.091101,-2.954332 -0.05253,-0.359341 0.228522,-0.6146 0.552334,-0.688928 1.215719,-0.278768 3.038831,1.064006 2.030682,2.298487 -0.355654,0.435894 -1.124981,0.950791 -1.715495,0.737452 -0.760875,-0.275226 -1.310353,-1.456177 -1.534928,-2.140297 -0.248852,-0.758434 0.920928,-1.217351 1.170612,-0.45603 0.204855,0.62457 0.515331,1.115944 1.019013,1.547515 -0.209178,-0.03182 -0.418593,-0.06379 -0.62777,-0.09562 0.29276,-0.07605 0.764154,-0.148001 0.604391,-0.471407 -0.119381,-0.241347 -0.599771,-0.232342 -0.801039,-0.186127 0.184102,-0.229561 0.368202,-0.459114 0.552334,-0.688921 0.07904,0.540053 0.187903,1.280182 0.648979,1.648732 0.337947,0.270115 0.637492,0.34288 0.98058,0.0509 0.368319,-0.313338 0.256127,-0.610404 0.06609,-1.007279 -0.397475,-0.829066 -1.496378,-1.513911 -2.437847,-1.407745 -1.400492,0.157634 -1.413129,1.914187 -0.418644,2.597447 0.547521,0.375936 1.303755,0.433318 1.920971,0.195829 0.271727,-0.104377 0.596455,-0.287132 0.760591,-0.542109 0.05988,-0.185895 0.11976,-0.371804 0.179643,-0.557705 -0.660302,-0.452672 -0.827315,-0.495205 -0.500766,-0.127781 -0.248749,0.05837 -0.497493,0.116741 -0.746492,0.175073 0.01778,-0.162667 0.03536,-0.325356 0.05314,-0.488016 0.219343,0.129668 0.438691,0.259328 0.658036,0.388989 0.601842,-0.02844 0.277389,-0.94342 -0.157034,-1.08348 -0.485347,-0.156352 -0.793859,0.04971 -0.816493,0.525057 -0.03592,0.762307 0.838853,1.09885 1.294719,0.489474 1.033128,-1.381215 -1.196132,-2.163827 -2.053168,-0.912103 0.03232,-0.206693 0.0646,-0.413139 0.09688,-0.619578 0.228225,0.569568 0.617373,1.028436 1.188873,1.286877 0.206444,0.09328 0.437435,0.163132 0.663678,0.186789 0.627117,0.06562 0.626495,-0.117692 1.123513,-0.402388 -0.694206,0.397657 -1.444404,-0.600498 -0.743749,-1.001949 v 0',
	];
	const nariz = [
		'm 47.481469,48.722276 c 0.351026,3.762676 -3.282377,6.673707 -6.925097,5.301088 -3.791321,-1.428669 -3.69373,-5.995361 -3.321567,-9.289009 0.09203,-0.816597 1.259425,-0.582742 1.243602,0.189415 -0.06467,3.129876 -0.890324,8.981748 -4.743718,9.850474 -1.644372,0.370557 -3.279344,-0.533886 -4.205416,-1.853391 -1.135066,-1.617971 -1.162652,-3.649814 -1.101619,-5.539992 0.02583,-0.797016 1.269101,-0.600617 1.243603,0.189422 -0.04971,1.539292 -0.05158,3.296986 0.873215,4.616525 0.908717,1.296995 2.573269,1.90966 3.93122,0.875978 2.286671,-1.740683 2.705103,-5.719423 2.759113,-8.328431 0.414368,0.06316 0.828985,0.126267 1.243602,0.189415 -0.269346,2.383699 -0.600586,5.599647 1.487878,7.33317 2.701329,2.242049 6.574407,-0.07329 6.265092,-3.391063 -0.07441,-0.795953 1.175794,-0.940294 1.250092,-0.143601 v 0',
		'm 47.481469,46.082207 c 0.351026,3.762676 -3.282377,6.673707 -6.925097,5.301088 -3.791321,-1.428669 -3.69373,-5.995361 -3.321567,-9.289009 0.09203,-0.816597 1.259425,-0.582742 1.243602,0.189415 -0.06467,3.129876 -0.890324,8.981748 -4.743718,9.850474 -1.644372,0.370557 -3.279344,-0.533886 -4.205416,-1.853391 -1.135066,-1.617971 -1.162652,-3.649814 -1.101619,-5.539992 0.02583,-0.797016 1.269101,-0.600617 1.243603,0.189422 -0.04971,1.539292 -0.05158,3.296986 0.873215,4.616525 0.908717,1.296995 2.573269,1.90966 3.93122,0.875978 2.286671,-1.740683 2.705103,-5.719423 2.759113,-8.328431 0.414368,0.06316 0.828985,0.126267 1.243602,0.189415 -0.269346,2.383699 -0.600586,5.599647 1.487878,7.33317 2.701329,2.242049 6.574407,-0.07329 6.265092,-3.391063 -0.07441,-0.795953 1.175794,-0.940294 1.250092,-0.143601 v 0',
	];
	const bigodeDireito3 = [
		'm 8.3681201,54.935616 c -1.8505766,0.548516 -3.3614885,1.739416 -4.3584655,3.365871 -0.4192294,0.684169 -1.4720883,0.0035 -1.0525971,-0.680599 1.1704055,-1.909673 2.978745,-3.257664 5.1389886,-3.898005 0.7769926,-0.230384 1.0434345,0.984045 0.272074,1.212733 v 0',
		'm 9.0876343,55.39363 c -1.6844351,0.942434 -2.8961275,2.436723 -3.5106117,4.242749 -0.2583374,0.759672 -1.4352073,0.327469 -1.1765992,-0.432193 0.7213129,-2.120473 2.188556,-3.833473 4.1548481,-4.933648 0.7072177,-0.395774 1.2344599,0.730212 0.5323628,1.123092 v 0',
	];
	const bigodeEsquerdo1 = [
		'm 78.59194,47.449402 c -2.693596,-1.236931 -5.700124,-1.424206 -8.501954,-0.407858 -0.75171,0.272691 -1.337388,-0.827778 -0.578858,-1.103117 3.115653,-1.130075 6.454851,-1.055831 9.476781,0.331714 0.724859,0.332784 0.339169,1.516797 -0.395969,1.179268 v 0',
		'm 78.63883,45.669442 c -2.693596,-1.236931 -5.700124,-1.424206 -8.501954,-0.407858 -0.75171,0.272691 -1.337388,-0.827778 -0.578858,-1.103117 3.115653,-1.130075 6.454851,-1.055831 9.476781,0.331714 0.724859,0.332784 0.339169,1.516797 -0.395969,1.179268 v 0',
	];
	const bigodeEsquerdo2 = [
		'm 75.202948,51.676459 c -1.658182,-1.089676 -3.476246,-1.654449 -5.466235,-1.705621 -0.810115,-0.0207 -0.745361,-1.260982 0.06428,-1.240275 2.197989,0.0564 4.262248,0.70477 6.09179,1.906807 0.67351,0.442604 -0.01341,1.483334 -0.68981,1.039089 v 0',
		'm 75.249838,49.896499 c -1.658182,-1.089676 -3.476246,-1.654449 -5.466235,-1.705621 -0.810115,-0.0207 -0.745361,-1.260982 0.06428,-1.240275 2.197989,0.0564 4.262248,0.70477 6.09179,1.906807 0.67351,0.442604 -0.01341,1.483334 -0.68981,1.039089 v 0',
	];
	const bigodeEsquerdo3 = [
		'm 74.343702,56.793695 c -1.922189,-1.682478 -4.167482,-2.870174 -6.634816,-3.566439 -0.778269,-0.219591 -0.382878,-1.398881 0.396055,-1.179022 2.687675,0.758131 5.083385,2.084479 7.172812,3.913431 0.605667,0.530204 -0.333827,1.357488 -0.934051,0.83203 v 0',
		'm 74.390592,55.013735 c -1.922189,-1.682478 -4.167482,-2.870174 -6.634816,-3.566439 -0.778269,-0.219591 -0.382878,-1.398881 0.396055,-1.179022 2.687675,0.758131 5.083385,2.084479 7.172812,3.913431 0.605667,0.530204 -0.333827,1.357488 -0.934051,0.83203 v 0',
	];

	const animationProps = useSpring({
		pontaNariz: pontaNariz[activeIndex],
		nariz: nariz[activeIndex],
		bigodeDireito3: bigodeDireito3[activeIndex],
		bigodeEsquerdo1: bigodeEsquerdo1[activeIndex],
		bigodeEsquerdo2: bigodeEsquerdo2[activeIndex],
		bigodeEsquerdo3: bigodeEsquerdo3[activeIndex],
	});

	useEffect(() => {
		setTimeout(() => {
			setActiveIndex(activeIndex === 0 ? 1 : 0);
		}, 1000);
	});

	return (
		<svg width="45" height="39" viewBox="0 0 79.374998 68.791666">
			<g transform="translate(-9.1866672e-8,-4.8366248)">
				<path
					d="m 20.726642,69.620918 c 6.329339,2.300549 13.505551,2.890226 20.218475,2.7527 6.240171,-0.127562 12.624034,-1.175536 18.240814,-3.968573 5.993644,-2.980438 11.025715,-8.038075 12.722348,-14.563245 1.96094,-7.541708 2.153367,-15.683745 1.087926,-23.371955 -1.209872,-8.731094 -4.17991,-17.160545 -8.74929,-24.7303511 0.361706,0.018249 0.723404,0.036506 1.08508,0.054755 -1.170828,1.8136549 -2.341906,3.6297845 -3.512963,5.4459151 -1.003912,1.555965 -1.912887,3.258731 -3.104375,4.684609 -1.04319,1.248079 -2.305253,1.672847 -3.915831,1.727867 -2.204809,0.07527 -4.417002,0.05964 -6.622938,0.0886 -4.384136,0.05732 -8.768261,0.114645 -13.15238,0.171719 -2.233423,0.02931 -4.466845,0.05862 -6.700262,0.08768 -1.732359,0.02251 -3.726431,0.315338 -5.394336,-0.259518 -1.756286,-0.60518 -2.377807,-2.320263 -3.092016,-3.856232 C 18.809404,11.6738 17.781758,9.4656862 16.754242,7.255093 17.081053,7.313861 17.40762,7.372622 17.73456,7.4289121 10.833358,15.330656 6.344038,25.220871 4.8916818,35.550103 3.6516447,44.368719 4.0944235,54.534678 9.8182299,61.869518 c 2.8054151,3.595298 6.6394431,6.140257 10.9084121,7.7514 0.753092,0.284463 0.36329,1.465773 -0.395989,1.179261 C 12.147161,67.711441 6.3400138,61.348051 4.215004,52.936625 1.6767851,42.889758 3.3646774,31.584318 7.2489111,22.093826 9.5766201,16.406549 12.83463,11.153447 16.891447,6.5084423 c 0.261502,-0.3001701 0.826241,-0.1547825 0.980196,0.1763002 0.994545,2.1368064 1.988968,4.2760925 2.983398,6.4151305 0.443954,0.954542 0.83293,2.235842 1.632019,2.970046 0.85082,0.781333 2.088446,0.731122 3.170763,0.726047 5.045598,-0.02295 10.092371,-0.13189 15.137425,-0.197893 2.48155,-0.03246 4.963336,-0.06465 7.444887,-0.09711 1.240647,-0.01624 2.481544,-0.03246 3.722198,-0.04869 1.229297,-0.01606 2.562998,0.102717 3.775209,-0.113665 2.251415,-0.401954 3.399757,-3.254085 4.508415,-4.971395 1.344515,-2.0859259 2.68888,-4.1693718 4.033474,-6.2552939 0.265948,-0.4118624 0.850029,-0.3351354 1.085073,0.054755 8.377155,13.8815439 11.396909,30.7040019 8.295102,46.5741769 -0.75955,3.886458 -2.075751,7.324271 -4.607346,10.426182 -1.936799,2.372885 -4.265794,4.389492 -6.881396,6.006133 -5.451125,3.368934 -11.884376,4.847902 -18.238748,5.302222 -3.655586,0.261215 -7.33298,0.174629 -10.980644,-0.1599 -4.283956,-0.392743 -8.56871,-1.042448 -12.620819,-2.515304 -0.757337,-0.27548 -0.366792,-1.456508 0.395989,-1.179261"
					fill="white"
				/>
				<path
					d="m 17.154981,13.801037 c 0.284763,1.2743 0.44064,2.560501 0.482951,3.864597 0.0095,0.294445 -0.243548,0.488848 -0.492424,0.574527 -1.116318,0.384123 -2.22948,0.420221 -3.383406,0.197352 -0.315868,-0.06095 -0.520146,-0.505249 -0.399319,-0.784912 0.601866,-1.393208 1.35977,-2.690252 2.3027,-3.886186 0.29156,-0.369784 1.081398,-0.376435 1.140933,0.206047 0.147309,1.441954 7.85e-4,2.820336 -0.495386,4.187539 -0.137256,0.377818 -0.594488,0.545501 -0.942356,0.324011 -0.524003,-0.33359 -1.019638,-0.820691 -0.852955,-1.494224 0.130101,-0.526655 0.727299,-0.939709 1.271256,-0.733443 1.142017,0.433168 0.129527,2.252077 -0.911086,1.364422 -0.61202,-0.521823 0.32817,-1.348822 0.9339,-0.832041 0.02778,0.02354 0.05576,0.04733 0.0835,0.07112 -0.201069,-0.06362 -0.402151,-0.126987 -0.60324,-0.190356 -0.08211,0.07718 -0.164244,0.154613 -0.246621,0.23203 0.05377,0.1492 0.107497,0.298646 0.161256,0.447846 -0.02749,-0.02924 -0.0552,-0.05825 -0.08291,-0.0875 0.144884,0.06824 0.290038,0.136251 0.434955,0.203999 0.180697,-0.185119 0.347872,-0.192103 0.501784,-0.02069 -0.314035,0.108008 -0.628071,0.216016 -0.942356,0.324011 0.415038,-1.143237 0.585192,-2.316737 0.461231,-3.528208 0.380228,0.06868 0.760705,0.137369 1.14092,0.206296 -0.875479,1.110054 -1.60143,2.301022 -2.16092,3.59614 -0.133101,-0.261638 -0.26621,-0.523275 -0.399319,-0.784912 0.926137,0.178795 1.830988,0.07299 2.715357,-0.231063 -0.164137,0.191426 -0.328287,0.3831 -0.49218,0.574788 -0.03891,-1.194745 -0.194441,-2.366026 -0.455044,-3.532663 -0.174452,-0.781772 1.054523,-1.04929 1.22877,-0.268522 v 0"
					fill="white"
				/>
				<path
					d="m 65.819377,13.143152 c 0.574992,0.991496 1.149834,1.985224 1.724754,2.978208 0.154411,0.266692 0.04045,0.72179 -0.269372,0.836972 -1.287723,0.478935 -2.577915,0.568028 -3.918635,0.25366 -0.334661,-0.07857 -0.49403,-0.487019 -0.399343,-0.784914 0.34808,-1.096874 0.837908,-2.132627 1.46213,-3.100916 0.22393,-0.349321 0.716334,-0.359292 0.993454,-0.07671 0.452461,0.460549 0.895028,1.049925 0.720764,1.730536 -0.147506,0.576762 -0.703978,1.034896 -1.318284,0.924313 -0.793551,-0.143006 -0.755634,-1.19261 0.0642,-1.239282 0.867085,-0.05076 1.624253,0.418208 2.023839,1.166326 0.134329,0.251253 0.06256,0.554033 -0.137212,0.746647 -0.362611,0.349286 -0.805513,0.505754 -1.310772,0.444694 -0.7992,-0.09678 -0.741202,-1.337871 0.06427,-1.240274 0.163914,0.05851 0.298386,0.01654 0.403331,-0.126383 -0.04566,0.248886 -0.09142,0.497519 -0.137104,0.746653 -0.209078,-0.391564 -0.53266,-0.524036 -0.97054,-0.498381 0.0214,-0.413507 0.04287,-0.827014 0.0642,-1.239282 0.0575,0.01036 -0.356433,-0.537775 -0.400798,-0.582293 0.33108,-0.02557 0.662266,-0.05114 0.993346,-0.07671 -0.56865,0.883549 -1.003284,1.813404 -1.320167,2.811626 -0.133131,-0.261638 -0.266234,-0.523276 -0.399336,-0.784913 0.980206,0.23002 1.999241,0.174002 2.943914,-0.177249 -0.08988,0.279235 -0.179615,0.557979 -0.26938,0.837221 -0.574913,-0.992985 -1.149941,-1.98523 -1.724782,-2.979205 -0.402818,-0.696799 0.71664,-1.264555 1.117531,-0.570341 v 0"
					fill="white"
				/>
				<path
					d="m 21.576237,33.23348 c 0.365054,1.319884 -0.189768,2.539383 -1.368003,3.228522 -0.228179,0.133731 -0.588418,0.06829 -0.756271,-0.135406 -1.420776,-1.721335 -1.306836,-4.115321 0.25189,-5.708954 0.311322,-0.318294 0.769445,-0.128548 0.980241,0.175306 1.542948,2.22318 1.533441,5.125811 0.05805,7.377477 -0.229863,0.351012 -0.709502,0.35292 -0.99324,0.07548 -1.777812,-1.736621 -1.625105,-4.742701 0.317159,-6.29732 0.306787,-0.24541 0.793027,-0.199491 0.980497,0.175319 0.814455,1.629314 0.484187,3.461259 -0.838538,4.721347 -0.234591,0.223435 -0.680458,0.210635 -0.888475,-0.04485 -0.711719,-0.873796 -0.792118,-1.92912 -0.12524,-2.860184 0.24664,-0.344204 0.695092,-0.356884 0.993246,-0.07573 0.963929,0.90866 1.089692,2.197319 0.446168,3.32455 -0.295981,0.518284 -0.978475,0.247824 -1.140671,-0.206284 -0.301964,-0.844915 -0.312918,-1.57715 -0.140716,-2.449615 0.137021,-0.694427 1.271063,-0.457396 1.22553,0.226977 -0.0228,0.343549 -0.04566,0.686852 -0.06851,1.030154 -0.05284,0.796672 -1.309675,0.735728 -1.256683,-0.06344 0.02279,-0.34331 0.04564,-0.686612 0.06851,-1.030161 0.408588,0.07582 0.81718,0.151409 1.225767,0.227244 -0.12815,0.649613 -0.04275,1.18093 0.174872,1.790285 -0.380228,-0.06865 -0.760455,-0.137356 -1.140684,-0.206038 0.381344,-0.667919 0.212621,-1.302424 -0.327484,-1.81166 0.331162,-0.02514 0.662078,-0.05041 0.99324,-0.07548 -0.368496,0.434542 -0.366306,0.88356 0.0066,1.347061 -0.296073,-0.01493 -0.592402,-0.02992 -0.888475,-0.04485 0.913989,-0.870845 1.123735,-2.108009 0.563864,-3.228065 0.326843,0.0583 0.653675,0.11679 0.980498,0.175312 -1.436181,1.149416 -1.541653,3.258312 -0.226579,4.543317 -0.330916,0.02535 -0.662078,0.05041 -0.993245,0.07573 1.254298,-1.914151 1.174036,-4.256254 -0.122907,-6.12555 0.326832,0.05851 0.653662,0.117051 0.980249,0.175313 -1.066205,1.089986 -1.127026,2.78456 -0.16104,3.95521 -0.252181,-0.04506 -0.504094,-0.09037 -0.756271,-0.135406 0.715684,-0.418764 0.930123,-1.089887 0.717875,-1.857157 -0.213724,-0.772811 1.016351,-1.037286 1.228771,-0.268517 v 0"
					fill="white"
				/>
				<path
					d="m 59.134403,35.128684 c 0.364951,1.319885 -0.189909,2.539376 -1.36805,3.228523 -0.22821,0.133723 -0.588439,0.06829 -0.756354,-0.135413 -1.420847,-1.721343 -1.306906,-4.115329 0.251895,-5.708947 0.31129,-0.318301 0.769623,-0.128548 0.980398,0.175305 1.542771,2.223173 1.53344,5.125812 0.05807,7.377485 -0.230108,0.350998 -0.709579,0.35292 -0.993361,0.07547 -1.777908,-1.736628 -1.625209,-4.742708 0.317233,-6.297321 0.306739,-0.245409 0.793093,-0.199483 0.980399,0.17532 0.814395,1.629307 0.484235,3.461258 -0.838472,4.721346 -0.23451,0.223443 -0.680558,0.210636 -0.888594,-0.04485 -0.711697,-0.873795 -0.792095,-1.929119 -0.125198,-2.860183 0.246601,-0.344197 0.695046,-0.356884 0.993403,-0.07572 0.963749,0.908646 1.089639,2.197312 0.446042,3.324536 -0.295975,0.518291 -0.978573,0.247824 -1.140703,-0.206285 -0.301931,-0.844907 -0.312938,-1.57715 -0.140764,-2.449614 0.136976,-0.694427 1.271172,-0.457389 1.22568,0.226984 -0.02283,0.343549 -0.04558,0.686858 -0.06841,1.030161 -0.053,0.796658 -1.309795,0.735721 -1.256677,-0.06344 0.02276,-0.343303 0.04566,-0.686606 0.06841,-1.030162 0.40851,0.07581 0.817127,0.15141 1.225637,0.227238 -0.128152,0.649613 -0.04273,1.18093 0.174921,1.790292 -0.380246,-0.06865 -0.760478,-0.137364 -1.140731,-0.206038 0.381395,-0.66792 0.212573,-1.302431 -0.327456,-1.811668 0.331066,-0.02513 0.662231,-0.05041 0.99329,-0.07547 -0.368404,0.434549 -0.366286,0.88356 0.0064,1.347061 -0.296203,-0.01493 -0.592398,-0.02992 -0.888601,-0.04485 0.91409,-0.870845 1.12386,-2.108002 0.56402,-3.228058 0.326842,0.0583 0.653563,0.11679 0.980399,0.175312 -1.436163,1.149409 -1.541687,3.258312 -0.226441,4.543324 -0.331173,0.02528 -0.662224,0.05041 -0.993404,0.07572 1.254201,-1.914151 1.174138,-4.256248 -0.122844,-6.125543 0.326721,0.05851 0.65352,0.117044 0.98027,0.175313 -1.066204,1.089985 -1.127027,2.784559 -0.160974,3.955217 -0.25223,-0.04506 -0.504339,-0.09038 -0.756447,-0.13542 0.715656,-0.418764 0.930176,-1.089887 0.717924,-1.85715 -0.213743,-0.772811 1.016332,-1.037293 1.228877,-0.268517 v 0"
					fill="white"
				/>
				<animated.path d={animationProps.pontaNariz} fill="white" />
				<animated.path d={animationProps.nariz} fill="white" />
				<path
					d="m 46.700846,18.18104 c 0.440569,2.620185 0.384148,5.295121 -0.297473,7.872861 -0.402682,1.522388 -1.436199,3.489456 -3.345119,3.184223 -1.874921,-0.299799 -2.458003,-2.542925 -2.722103,-4.089511 -0.468456,-2.743449 -0.326102,-5.515775 0.314396,-8.218942 0.08779,-0.370863 0.640328,-0.559603 0.942117,-0.324271 1.197723,0.934131 2.485859,1.645263 3.927223,2.147008 -0.221726,0.335255 -0.443466,0.67051 -0.665199,1.005765 -0.424654,-0.441737 -0.913012,-0.617094 -1.519222,-0.608886 0.166318,-0.345512 0.332892,-0.691011 0.499203,-1.036276 1.089624,1.303474 1.800201,2.773353 2.114709,4.436627 0.110531,0.585558 -0.661618,1.043503 -1.081585,0.550277 -1.18394,-1.389812 -2.367638,-2.779355 -3.551578,-4.169162 0.311483,-0.277504 0.622695,-0.554773 0.934164,-0.832277 1.55054,1.984303 2.488485,4.274934 2.698533,6.77729 0.05422,0.646382 -0.827022,1.10877 -1.173104,0.419807 -0.823092,-1.637707 -1.646183,-3.275421 -2.469288,-4.912882 0.391032,-0.139936 0.782086,-0.28012 1.173125,-0.420055 0.708572,2.121382 1.417152,4.242754 2.125995,6.3639 0.222511,0.666314 -0.888066,1.061176 -1.173375,0.420046 -0.77603,-1.743521 -1.552059,-3.487041 -2.32808,-5.230816 0.395718,-0.08449 0.791458,-0.169222 1.187178,-0.253705 0.03852,2.500908 0.688861,4.866063 1.908185,7.056489 -0.326842,-0.0583 -0.65342,-0.116776 -0.980263,-0.175052 2.482172,-2.855959 1.843468,-7.02188 1.251862,-10.428129 0.414267,-0.03406 0.828562,-0.06837 1.242858,-0.102672 -0.05971,1.307903 -0.01726,2.66846 -0.194603,3.96595 -0.09631,0.706424 -0.431203,1.430915 -1.20806,1.571278 -2.031672,0.366783 -2.780757,-3.58983 -3.092083,-4.871688 0.414032,-0.03407 0.828313,-0.06838 1.242595,-0.102437 -0.492675,2.870542 -0.130114,5.722061 1.11771,8.364329 -0.282684,-0.08862 -0.565369,-0.177249 -0.848302,-0.265891 0.357425,-0.191372 0.548447,-0.468985 0.573593,-0.832818 0.171154,-0.779253 1.365075,-0.384744 1.19487,0.39082 -0.157622,0.717521 -0.55327,1.184767 -1.189555,1.544861 -0.286101,0.16214 -0.709093,0.02887 -0.848045,-0.265876 -1.337078,-2.831063 -1.786354,-5.915518 -1.256955,-8.998838 0.112906,-0.656848 1.065876,-0.830604 1.242844,-0.102425 0.123814,0.509127 1.106453,4.194001 1.779634,3.666655 0.233247,-0.182965 0.112008,-1.54999 0.125941,-1.851959 0.03431,-0.758555 0.06927,-1.516827 0.103732,-2.275375 0.03125,-0.686335 1.120735,-0.804955 1.242852,-0.102424 0.684381,3.940669 1.195882,8.358324 -1.637829,11.618346 -0.274937,0.3164 -0.806427,0.137131 -0.980249,-0.175312 -1.326274,-2.382848 -2.005451,-4.974536 -2.047406,-7.691245 -0.0095,-0.60881 0.939555,-0.80987 1.186941,-0.25397 0.776279,1.743527 1.552316,3.487055 2.328345,5.230583 -0.391032,0.139933 -0.782321,0.279852 -1.173368,0.420039 -0.708579,-2.121386 -1.417159,-4.242765 -2.125745,-6.363893 -0.225816,-0.675682 0.861984,-1.039359 1.173111,-0.420056 0.823098,1.637712 1.64619,3.275419 2.469281,4.913133 -0.391033,0.139933 -0.782072,0.279873 -1.173104,0.419806 -0.191864,-2.284328 -0.982425,-4.394418 -2.403928,-6.213537 -0.488955,-0.625788 0.40704,-1.450789 0.934164,-0.832276 1.183684,1.389794 2.367624,2.779601 3.551565,4.169408 -0.360536,0.183501 -0.721057,0.366762 -1.081592,0.550263 -0.27473,-1.453354 -0.865224,-2.73114 -1.819848,-3.87286 -0.358288,-0.428938 -0.04951,-1.028897 0.499202,-1.036275 0.963035,-0.01284 1.729891,0.331766 2.38914,1.016884 0.431609,0.448554 -0.07657,1.210554 -0.665199,1.005764 -1.538626,-0.536 -2.939049,-1.288113 -4.220592,-2.287159 0.314035,-0.108007 0.628073,-0.216016 0.942103,-0.324023 -0.449894,1.898779 -0.628752,3.838593 -0.491741,5.785639 0.09197,1.303866 0.184031,4.001967 1.532584,4.767878 1.800936,1.022768 2.465257,-2.651132 2.625133,-3.626186 0.316349,-1.928155 0.284361,-3.874125 -0.03931,-5.798261 -0.132354,-0.78686 1.096045,-1.057889 1.229026,-0.268509 v 0"
					fill="white"
				/>
				<path
					d="m 36.385009,18.078567 c 0.695538,2.611415 0.875432,5.618107 -0.02092,8.211126 -0.547482,1.583726 -1.89664,3.324951 -3.810347,2.854346 -1.997073,-0.490748 -2.545348,-2.914417 -2.917643,-4.614934 -0.537748,-2.456718 -0.795015,-4.966929 0.447491,-7.256715 0.261873,-0.482451 1.034954,-0.287256 1.140927,0.206296 0.611631,2.849666 1.420254,5.647096 2.444672,8.379562 -0.391284,0.139919 -0.782319,0.279852 -1.173354,0.419792 -0.407573,-2.610317 -0.815388,-5.220638 -1.222961,-7.830951 -0.107869,-0.690371 0.811239,-1.047141 1.173125,-0.420055 0.966794,1.675305 1.933588,3.350602 2.900389,5.025913 -0.372482,0.190365 -0.744978,0.380977 -1.117453,0.571335 -0.622078,-1.315195 -0.936538,-2.653411 -0.977845,-4.103448 -0.0103,-0.365119 0.344284,-0.56534 0.660471,-0.588431 0.703473,-0.0518 1.183448,0.173375 1.659627,0.676157 -0.341981,0.233934 -0.683942,0.467619 -1.025923,0.701553 -0.36036,-0.885163 -0.42256,-1.693354 -0.193658,-2.619416 0.160042,-0.647505 1.04614,-0.469239 1.211949,0.06115 1.057778,3.387245 1.90761,8.137579 -2.043437,10.074317 -0.333027,0.163259 -0.853902,-0.007 -0.90371,-0.417159 -0.362553,-2.983086 -0.529453,-5.977943 -0.490976,-8.982569 0.0071,-0.559972 0.731547,-0.75421 1.095426,-0.384431 2.110858,2.146877 2.208735,5.224043 2.164863,8.045862 -0.0081,0.51142 -0.763825,0.817738 -1.095426,0.384427 -1.592603,-2.08193 -2.149345,-4.560988 -1.618699,-7.113764 0.09102,-0.438845 0.801395,-0.579827 1.064261,-0.220617 1.03315,1.411048 1.688816,2.938834 1.932632,4.667943 -0.404152,-0.02042 -0.808047,-0.04077 -1.211949,-0.06118 0.517733,-1.758573 0.180578,-3.568485 -0.960707,-5.017819 0.36497,-0.128069 0.730188,-0.256126 1.095157,-0.384196 -0.111594,1.386112 -0.113451,2.763585 -0.0053,4.150087 0.05626,0.718612 -1.078335,0.755118 -1.242596,0.102442 -0.276672,-1.099554 -0.741675,-2.012628 -1.475695,-2.884067 0.354841,-0.07362 0.709432,-0.147247 1.064261,-0.220617 -1.254861,2.698283 -1.205172,5.698653 0.193103,8.335831 0.325083,0.612798 -0.565637,1.25825 -1.025666,0.701566 -2.149854,-2.600488 -2.856173,-5.99139 -1.911157,-9.217131 0.210039,-0.717604 1.192599,-0.431258 1.22553,0.226981 0.143222,2.853638 0.919668,5.576571 2.271632,8.100732 -0.361669,-0.01824 -0.723344,-0.03647 -1.085019,-0.05478 1.807767,-2.698981 0.384442,-6.068359 -0.842878,-8.707848 0.231571,0.107187 0.463173,0.213878 0.694756,0.320818 -0.2695,0.08986 -0.53925,0.17971 -0.809001,0.269559 -0.09069,-0.404243 -0.181389,-0.808486 -0.27208,-1.212728 0.358668,-0.04532 0.717337,-0.09064 1.075748,-0.135975 0.798261,-0.100984 1.075395,1.111254 0.27233,1.21274 -0.358668,0.04532 -0.717337,0.09064 -1.075998,0.135963 -0.811193,0.102568 -1.037482,-0.957881 -0.27208,-1.212728 0.269757,-0.08985 0.539507,-0.179698 0.809008,-0.269558 0.250002,-0.08314 0.588204,0.09136 0.695006,0.320829 1.431815,3.079324 2.866564,6.841479 0.777773,9.959766 -0.261923,0.391179 -0.863975,0.357814 -1.085018,-0.05478 -1.459278,-2.724313 -2.256495,-5.659198 -2.410862,-8.735488 0.408587,0.07583 0.81718,0.151411 1.225766,0.227241 -0.815841,2.785092 -0.20724,5.746774 1.650694,7.994293 -0.341981,0.23394 -0.683942,0.467619 -1.025924,0.701559 -1.539693,-2.903715 -1.658137,-6.313443 -0.270272,-9.297981 0.184606,-0.396817 0.733099,-0.613865 1.064261,-0.220617 0.864106,1.025981 1.444795,2.152565 1.77056,3.447825 -0.414281,0.03408 -0.828573,0.06837 -1.242865,0.102674 -0.108081,-1.386745 -0.106274,-2.764222 0.0053,-4.150085 0.04058,-0.500582 0.745021,-0.829386 1.095427,-0.384431 1.42576,1.809882 1.87065,4.03534 1.221676,6.240679 -0.167582,0.56928 -1.125498,0.55153 -1.211948,-0.06118 -0.211503,-1.5014 -0.735453,-2.87208 -1.637506,-4.104412 0.354592,-0.07363 0.709419,-0.146998 1.064261,-0.220616 -0.432681,2.081944 0.06183,4.196008 1.358227,5.890927 -0.365218,0.128055 -0.730436,0.256118 -1.095406,0.384187 0.03869,-2.488317 0.02652,-5.249784 -1.84235,-7.150171 0.365226,-0.128056 0.730196,-0.256126 1.095427,-0.384431 -0.03703,2.894033 0.114003,5.776909 0.463063,8.650631 -0.301236,-0.139053 -0.602472,-0.278113 -0.903709,-0.417166 3.374468,-1.65421 2.265834,-5.908259 1.393047,-8.70271 0.403895,0.02038 0.807797,0.04077 1.211948,0.06115 -0.145049,0.586584 -0.1122,1.095845 0.11624,1.657255 0.256641,0.630232 -0.511281,1.245074 -1.02568,0.701815 -0.26323,-0.08963 -0.526467,-0.179022 -0.789716,-0.268159 0.220078,-0.196313 0.440399,-0.392366 0.660464,-0.588431 0.0352,1.237085 0.308527,2.347906 0.838615,3.468702 0.343161,0.725871 -0.71626,1.266565 -1.117453,0.571335 -0.966801,-1.675303 -1.933595,-3.350604 -2.900396,-5.025909 0.391043,-0.139935 0.782091,-0.280119 1.173125,-0.420055 0.407803,2.610574 0.815376,5.220889 1.22319,7.831213 0.101237,0.648255 -0.911443,1.118437 -1.173354,0.419799 -1.062714,-2.834879 -1.920987,-5.724596 -2.55601,-8.682136 0.380229,0.06867 0.760713,0.13737 1.14094,0.206048 -0.928243,1.710249 -0.789523,3.638979 -0.44098,5.486772 0.250829,1.331037 0.527963,3.910143 2.041707,4.435186 1.883572,0.653388 2.60145,-2.308005 2.792091,-3.555836 0.306597,-2.007475 0.14843,-4.013788 -0.373006,-5.972276 -0.20632,-0.774676 1.023537,-1.03991 1.22877,-0.268522 v 0"
					fill="white"
				/>
				<path
					d="m 9.491573,62.653502 c 1.022729,-2.529385 2.544614,-4.821986 4.552705,-6.697653 1.390871,-1.298987 3.421996,-2.658109 5.088579,-0.939132 1.494518,1.541644 0.813679,3.797408 5.9e-4,5.485695 -1.179367,2.449002 -2.982003,4.518582 -5.192689,6.11584 -0.595233,0.430058 -1.249869,-0.342894 -0.852946,-0.898015 1.999853,-2.797662 3.488,-5.866854 4.473113,-9.148069 0.354615,0.21412 0.709357,0.428086 1.063949,0.642227 -1.993392,2.148197 -3.419055,4.638866 -4.265757,7.428523 -0.384014,-0.166681 -0.768034,-0.333354 -1.152049,-0.500028 0.740283,-1.931274 1.480371,-3.862703 2.220654,-5.793977 0.384014,0.166681 0.768034,0.333354 1.152049,0.500028 -1.031353,2.205043 -2.062348,4.410058 -3.0937,6.615108 -0.271,0.579115 -1.10629,0.418173 -1.202014,-0.186894 -0.335996,-2.126998 0.01736,-4.237534 1.034978,-6.142293 0.320074,-0.599266 1.320809,-0.381604 1.197727,0.345513 -0.304156,1.800304 -0.870623,3.503566 -1.717855,5.126621 -0.208157,0.398685 -0.811523,0.529782 -1.08891,0.109926 -0.717081,-1.086719 -0.812641,-2.331275 -0.183132,-3.482289 0.325782,-0.595963 1.313334,-0.38473 1.197732,0.345521 -0.174943,1.104693 -0.814144,1.881531 -1.870608,2.283363 -0.529498,0.201665 -0.9787992,-0.345753 -0.796848,-0.831488 1.28536,-3.430385 3.834677,-6.139187 7.165012,-7.724307 0.472037,-0.224457 1.053099,0.375675 0.797042,0.831642 -1.050327,1.868866 -2.321151,3.54712 -3.865848,5.047914 -0.480822,0.467211 -1.362026,0.04485 -1.063949,-0.642235 0.923857,-2.129032 2.481851,-3.739562 4.554336,-4.81051 0.580815,-0.300066 1.067283,0.529613 0.708744,0.973695 -0.63319,0.784534 -1.037733,1.604179 -1.254744,2.587971 -0.399241,-0.115171 -0.798481,-0.230349 -1.197726,-0.345514 0.430882,-1.067202 0.861571,-2.134566 1.292612,-3.201965 0.202492,-0.501569 0.987305,-0.471815 1.165189,0.03211 1.133972,3.208893 -0.126512,6.866804 -3.058283,8.676099 -0.68269,0.421594 -1.419004,-0.586727 -0.729714,-1.011996 2.452308,-1.513292 3.566902,-4.519111 2.609673,-7.228223 0.388393,0.0107 0.776795,0.02133 1.165189,0.03211 -0.430689,1.067357 -0.861736,2.134749 -1.292617,3.201958 -0.260845,0.645875 -1.350786,0.347908 -1.197885,-0.345323 0.262468,-1.190357 0.752641,-2.227545 1.522488,-3.181244 0.236193,0.32463 0.472554,0.649057 0.708748,0.973681 -1.765037,0.911864 -3.062524,2.347053 -3.843768,4.147399 -0.354745,-0.213959 -0.709352,-0.428087 -1.064112,-0.642031 1.461175,-1.419615 2.693905,-2.992668 3.689262,-4.763823 0.265615,0.277156 0.531227,0.554325 0.796843,0.831481 -3.029634,1.442075 -5.290641,3.955604 -6.454438,7.061204 -0.265616,-0.277163 -0.531238,-0.554318 -0.796692,-0.831678 0.616961,-0.23451 0.966641,-0.667461 1.068528,-1.311048 0.39924,0.115171 0.798643,0.230166 1.197731,0.345513 -0.417642,0.763975 -0.428271,1.526683 0.05697,2.26184 -0.363102,0.03654 -0.726006,0.07324 -1.088914,0.10994 0.79887,-1.530611 1.33913,-3.117512 1.626378,-4.817064 0.39924,0.115171 0.798643,0.230145 1.197883,0.345323 -0.927127,1.735656 -1.241889,3.575176 -0.93525,5.515878 -0.400564,-0.06245 -0.801287,-0.124662 -1.20201,-0.186894 1.031352,-2.20505 2.062547,-4.409903 3.093899,-6.614953 0.341685,-0.730504 1.437411,-0.244023 1.152048,0.500027 -0.740089,1.931429 -1.480367,3.862696 -2.220654,5.793977 -0.293369,0.765165 -1.377739,0.24329 -1.152049,-0.500027 0.876036,-2.886185 2.380711,-5.49113 4.441988,-7.712578 0.504381,-0.543412 1.261231,-0.01471 1.064117,0.642037 -1.017695,3.389557 -2.58551,6.544301 -4.649542,9.431971 -0.284219,-0.299461 -0.568582,-0.598745 -0.852784,-0.898219 1.529265,-1.104821 2.847319,-2.436688 3.877795,-4.010832 0.889349,-1.358608 2.391223,-3.840567 1.357185,-5.443957 -1.340453,-2.078924 -3.935961,1.006891 -4.821646,2.038869 -1.275588,1.485776 -2.250486,3.157743 -2.98036,4.963503 -0.300933,0.744036 -1.4516975,0.240882 -1.1522475,-0.500183 v 0"
					fill="white"
				/>
				<path
					d="M 7.7776837,46.165636 C 5.4746948,45.23691 3.0781603,45.175178 0.7250364,45.968181 -0.0413004,46.226468 -0.30516341,45.010919 0.45296309,44.755456 2.9917806,43.899699 5.6912257,43.985419 8.1736605,44.986622 c 0.744961,0.30022 0.3563813,1.482347 -0.3959768,1.179014 v 0"
					fill="white"
				/>
				<path
					d="m 7.7035777,50.801706 c -2.4501678,-0.06745 -4.7444828,0.70915 -6.632352,2.254835 -0.62237382,0.509765 -1.46779027,-0.410069 -0.84304878,-0.921707 2.14420038,-1.755835 4.75303838,-2.649851 7.53965288,-2.573403 0.8100128,0.02225 0.7455139,1.262482 -0.064254,1.240275 v 0"
					fill="white"
				/>
				<animated.path d={animationProps.bigodeDireito3} fill="white" />
				<animated.path d={animationProps.bigodeEsquerdo1} fill="white" />
				<animated.path d={animationProps.bigodeEsquerdo2} fill="white" />
				<animated.path d={animationProps.bigodeEsquerdo3} fill="white" />
			</g>
		</svg>
	);
}

export default AnimatedLogo;

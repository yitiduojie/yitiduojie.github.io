(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{337:function(e,t,a){"use strict";a.r(t);var i=a(33),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"dipole-derivatives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dipole-derivatives"}},[e._v("#")]),e._v(" Dipole derivatives")]),e._v(" "),a("p",[e._v('Arivazhagan asked a question: "How can we find the dipole moment derivative for a molecule using DFT calculations?"')]),e._v(" "),a("p",[e._v('Rafik Karaman answered: " There is NO such thing called dipole moment of a molecule. There is a dipole moment of a functional group. Molecule have dielectric constants. For example water has a dielectric constant of about 78.')]),e._v(" "),a("p",[e._v("For the calculation of dielectric constant using DFT, please read the following publications:\n1-Microelectronics Reliability\nVolume 39, Issue 2, February 1999, Pages 279–284")]),e._v(" "),a("p",[e._v("Density functional theory applied to the calculation of dielectric constant of low-k materials\nA. Courtot-Descharlesa,  F. Piresb, P. Pailleta, J.L. Leraya\ndoi:10.1016/S0026-2714(98)00237-6")]),e._v(" "),a("p",[e._v("Abstract")]),e._v(" "),a("p",[e._v('The interest of low-k dielectric materials to reduce capacitance in multilevel metal interconnects of integrated circuits is well known in the semiconductor industry. The use of these materials (especially hydrogen silsesquioxane (HSQ) and methyl silsesquioxane (MSQ): intermetal dielectric applications in the back end of line fabrication) leads to a reduction of the dielectric constant from k≅4 in a traditional intermetal dielectric material of silicon dioxide to a value of ≅2.5–3. The physical difference between HSQ or MSQ and a-SiO2 is the presence of Si–H bonds (for HSQ) or Si–CH3 bonds (for MSQ) and the density of the material. A theoretical calculation of bond polarizability (Si–H or Si–CH3) associated to experimental values of electric dipole densities can lead, using the Clausius-Mossotti relationship, to the calculation of the dielectric constant. After validation of the calculation methods both on simulation and experimental values, it is shown that for a constant density, the difference between the materials could be due to the bond polarizability and furthermore that this difference accounts, in part, for the value of dielectric constant. Consequently, even if densification remains the main parameter explaining low-k values, the polarizability of building units of these materials is not negligible."')]),e._v(" "),a("p",[e._v('Arivazhagan said:"Thank you very much, Rafik. Is it possible to do DFPT calculations using Gaussian program? Can we calculate the complex permittivity?\nI understood that the term polar molecule means a molecule that has a dipole moment. The polar nature of the molecule is due to the dipole moment of the constituent functional group. I used the phrase in that sense. The '),a("strong",[e._v("dipole moment derivative")]),e._v(' is required to investigate the nature of H-bonds (blue and red shifting)."')]),e._v(" "),a("p",[e._v('Rafik Karaman said:\n"Dear Mr. Arivazhagan, Dipole moment is a measure of the functional group in the molecule. The sume of all the dipole moments in the group gives the term called dielectric constant. To my knoweledge, there is no way to run DFPT in Gaussian.\nFor DFPT  calculations, see the following link:')]),e._v(" "),a("p",[e._v("http://pubs.rsc.org/en/content/articlehtml/2014/fd/c4fd00168k")]),e._v(" "),a("p",[e._v('For calculating complex permititivity, use the attached file. Hoping this time my answer is to the point."')]),e._v(" "),a("p",[e._v('Arivazhagan then asked:\n"If the sum of all the dipole moments in a functional group gives the term called dielectric constant, then the dipole moment should equal the dielectric constant. But they are found to assume different values for a given molecule. Why?"')]),e._v(" "),a("p",[e._v('Thomas Mayerhoefer see this question and said: "Simple answer is a single molecule does NOT have a dielectric constant, but it definitely possess a quantity called dipole moment. A dielectric constant is in contrast to the dipole moment a MACROSCOPIC quantity that starts to make sense as soon as you have an ENSEMBLE of molecules which also includes INTERACTION between the molecules. Indeed liquid water is the best example as it is the hydrogen bonding between molecules that is responsible for the high dielectric constant in liquid water (and the rotation of the permanent dipole in an electric field of comparably low frequenccy). Ice on the other hand has a comparably low dielectric constant (as the rotation is frozen) - but it is the same molecule!"')]),e._v(" "),a("p",[e._v("Fumiyuki Ito:")]),e._v(" "),a("p",[e._v('"Dr. Arivazhagan,')]),e._v(" "),a("p",[e._v("In the "),a("strong",[e._v("frequency calculation")]),e._v(" with Gaussian, "),a("strong",[e._v("dipole derivatives")]),e._v(" are calculated to determine infrared intensity.  If you look at the last part of the output file of Gaussian, you can find the following session: in the case of H2O at the RHF/6-31G level,")]),e._v(" "),a("p",[e._v("GradGradGradGradGradGradGradGradGradGradGradGradGradGradGradGradGradGrad\n1|1|UNPC-E1400BBQ|Freq|RHF|6-31G|H2O1|FITO|18-Feb-2013|0||#N Geom=AllC\nheck Guess=TCheck SCRF=Check GenChk RHF/6-31G Freq||H2O test||0,1|O,-0\n.0188774341,-0.0244713386,0.|H,0.9290620083,-0.0810959382,0.|H,-0.3143\n476107,0.8780212779,0.||Version=IA32W-G09RevA.02|State=1-A'|HF=-75.985\n3592|RMSD=3.326e-010|RMSF=1.696e-006|ZeroPoint=0.0224877|Thermal=0.025\n3221|Dipole=0.6008698,0.778974,0.|DipoleDeriv=-0.5105623,0.0508084,0")]),e._v(" "),a("p",[e._v('If you would like to obtain full tables for the dipole derivatives, use the FORMCHK command to get formatted chekpoint file *.fch from binary chekpoint file *.chk.  As far as I remember, dipole derivatives are punched in the *.fch file in the atomic unit with input orientation.\nI hope this would be of some help for you. "')]),e._v(" "),a("p",[e._v("按照Ito所说，可以通过频率计算来得到dipole derivatives. 问：　如何做频率计算？用CP2K可以吗？")]),e._v(" "),a("h2",{attrs:{id:"remi-s-suggestion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remi-s-suggestion"}},[e._v("#")]),e._v(" Remi's suggestion")]),e._v(" "),a("h2",{attrs:{id:"to-calculate-dipole-moment-derivative-and-dipole-polarizibility-derivative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-calculate-dipole-moment-derivative-and-dipole-polarizibility-derivative"}},[e._v("#")]),e._v(" To calculate dipole moment derivative and dipole polarizibility derivative")]),e._v(" "),a("p",[e._v("190409")]),e._v(" "),a("p",[e._v("The DFT MD trajectory (40 ps), sampled every 1 ps.")]),e._v(" "),a("p",[e._v("1a. For $t = 0$ in the  given trajectory file "),a("strong",[e._v("pos.xyz")]),e._v(", for a certain H2O molecule $i$ name the two OH bonds as OH bond 1 ($\\epsilon=1$) and OH bond 2 ($\\epsilon=-1$) .")]),e._v(" "),a("p",[e._v("1b. Elongate OH bond 1 (OH1), and keep other bonds still, then obtain a updated coordinate file pos_t0_i_index_1.xyz, index_1 is the index of H in OH1.")]),e._v(" "),a("p",[e._v("1c. Calculate the wannier centers for the system which is represented by the coordinate file "),a("strong",[e._v("pos_t0_i_index_1_delta_r.xyz")]),e._v(".")]),e._v(" "),a("p",[e._v("1d. Calculate the $k$ component of the dipole moment for OH1 in water molecule $i$ get $mu^{b, r+\\Delta r}_{k,i,1}$")]),e._v(" "),a("p",[e._v("$\\mu^{b,r+\\Delta r}"),a("em",[e._v("{k,i,1} = \\sum_i Z_i R_i -2 r^w")]),e._v("{electron \\ on \\ OH1} -r^w_{lone \\ pair}$")]),e._v(" "),a("p",[e._v("1a'--1d': similar to 1a-1d, get $\\mu^{b,r-\\Delta r}_{k,i,1}$")]),e._v(" "),a("p",[e._v("1e. In bond OH1 frame, calculate the $k$-component dipole moment derivative for OH1 in water molecule $i$")]),e._v(" "),a("p",[e._v("$(\\frac{\\partial \\mu^b}{\\partial r})"),a("em",[e._v("{k,i,1}= (\\mu^{b,r+\\Delta r}")]),e._v("{k,i,1} -\\mu^{b,r-\\Delta r}_{k,i,1})/2\\Delta r$")]),e._v(" "),a("p",[e._v("1f. Similarly, calculate $\\eta\\xi$-component of the dipole polarizability for OH2.")]),e._v(" "),a("p",[e._v("$(\\frac{\\partial \\alpha^b}{\\partial r})"),a("em",[e._v("{\\eta\\xi,i,-1}= (\\alpha^{b,r+\\Delta r}")]),e._v("{\\eta\\xi,i,-1} -\\alpha^{b,r-\\Delta r}_{\\eta\\xi,i,-1})/2\\Delta r$")]),e._v(" "),a("p",[e._v("( The problem:\n"),a("strong",[e._v("How to calculate the polarizability for a OH bond from Wannier centers?")]),e._v(" )")]),e._v(" "),a("p",[e._v("2.Repeat calculation 1a-1f for all other water molecules at time $t = 0$ in "),a("strong",[e._v("pos.xyz")]),e._v(".")]),e._v(" "),a("p",[e._v("3.Repeat step 1 and 2 for all other position file at time $t=1, 2 , 3 ,..., 40$ ps in "),a("strong",[e._v("pos.xyz")]),e._v(".")]),e._v(" "),a("p",[e._v("4.Calculate the average of $(\\frac{\\partial \\mu^b_k}{\\partial r})"),a("em",[e._v("{i,\\epsilon}$ and $(\\frac{\\partial \\alpha^b")]),e._v("{\\eta\\xi}}{\\partial r})_{i,\\epsilon}$ for all OH bonds, respectively.")])])}),[],!1,null,null,null);t.default=o.exports}}]);
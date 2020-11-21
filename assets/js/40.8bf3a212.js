(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{360:function(e,t,o){"use strict";o.r(t);var r=o(33),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"system-preparation-with-gromacs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#system-preparation-with-gromacs"}},[e._v("#")]),e._v(" System preparation with GROMACS")]),e._v(" "),o("p",[e._v("这里，我们要解决的问题是：制备LiNO3溶液。已知分子个数。")]),e._v(" "),o("p",[e._v("制备一个模型系统来运行GROMACS有很多的方法。 这些方法随着我们要研究的科学问题的类型以及物理模型之不同而不同. A protein-ligand atomistic free-energy simulation might need a multi-state topology, while a coarse-grained simulation might need to manage defaults that suit systems with higher density.")]),e._v(" "),o("p",[e._v("需要考虑的步骤：")]),e._v(" "),o("p",[e._v("有些是可选的。")]),e._v(" "),o("p",[e._v("The following general guidance should help with planning successful simulations. Some stages are optional for some kinds of simulations.")]),e._v(" "),o("p",[e._v("1： Clearly identify the property or phenomena of interest to be studied by performing the simulation. 弄清这一步之前不要做后面的步骤! 千万不要先运行你的模拟，然后尝试找出如何使用它来检验假设的方法，因为它可能不合适，或未保存所需的信息。")]),e._v(" "),o("p",[e._v("2： Select the appropriate tools to be able to perform the simulation and observe the property or phenomena of interest. It is important to read and familiarize yourself with publications by other researchers on similar systems. Choices of tools include:\nsoftware with which to perform the simulation (consideration of force field may influence this decision)\nthe force field, which describes how the particles within the system interact with each other. Select one that is appropriate for the system being studied and the property or phenomena of interest. This is a very important and non-trivial step! Consider now how you will analyze your simulation data to make your observations.")]),e._v(" "),o("p",[e._v("3： Obtain or generate the initial coordinate file for each molecule to be placed within the system. Many different software packages are able to build molecular structures and assemble them into suitable configurations.")]),e._v(" "),o("p",[e._v("4： Generate the raw starting structure for the system by placing the molecules within the coordinate file as appropriate. Molecules may be specifically placed or arranged randomly. Several non-GROMACS tools are useful here; within GROMACS "),o("code",[e._v("gmx solvate")]),e._v(", "),o("code",[e._v("gmx insert-molecules")]),e._v(" and "),o("code",[e._v("gmx genconf")]),e._v(" solve frequent problems.")]),e._v(" "),o("p",[e._v("5: Obtain or generate the topology file for the system, using (for example) "),o("code",[e._v("gmx pdb2gmx")]),e._v(", "),o("code",[e._v("gmx x2top")]),e._v(", "),o("code",[e._v("SwissParam")]),e._v(" (for CHARMM forcefield), "),o("code",[e._v("PRODRG")]),e._v(" (for GROMOS96 43A1), Automated Topology Builder (for GROMOS96 53A6), MKTOP (for OPLS/AA) or your favourite text editor in concert with chapter 5 of the GROMACS Reference Manual. For the AMBER force fields, antechamber or acpype might be appropriate.")]),e._v(" "),o("p",[e._v("6: Describe a simulation box (e.g. using "),o("code",[e._v("gmx editconf")]),e._v(") whose size is appropriate for the eventual density you would like, fill it with solvent (e.g. using "),o("code",[e._v("gmx solvate")]),e._v("), and add any counter-ions needed to neutralize the system (e.g. using "),o("code",[e._v("gmx grompp")]),e._v(" and "),o("code",[e._v("gmx insert-molecules")]),e._v("). In these steps you may need to edit your topology file to stay current with your coordinate file.")]),e._v(" "),o("p",[e._v("7: Run an energy minimization on the system (using "),o("code",[e._v("gmx grompp")]),e._v(" and "),o("code",[e._v("gmx mdrun")]),e._v("). This is required to sort out any bad starting structures caused during generation of the system, which may cause the production simulation to crash. It may be necessary also to minimize your solute structure in vacuo before introducing solvent molecules (or your lipid bilayer or whatever else). You should consider using flexible water models and not using bond constraints or frozen groups. The use of position restraints and/or distance restraints should be evaluated carefully.")]),e._v(" "),o("p",[e._v("8: Select the appropriate simulation parameters for the equilibration simulation (defined in "),o("code",[e._v("mdp")]),e._v(" file). You need to choose simulation parameters that are consistent with how force field was derived. You may need to simulate at NVT with position restraints on your solvent and/or solute to get the temperature almost right, then relax to NPT to fix the density (which should be done with Berendsen until after the density is stabilized, before a further switch to a barostat that produces the correct ensemble), then move further (if needed) to reach your production simulation ensemble (e.g. NVT, NVE). If you have problems here with the system blowing up, consider using the suggestions on that page, e.g. position restraints on solutes, or not using bond constraints, or using smaller integration timesteps, or several gentler heating stage(s).")]),e._v(" "),o("p",[e._v("9: Run the equilibration simulation for sufficient time so that the system relaxes sufficiently in the target ensemble to allow the production run to be commenced (using "),o("code",[e._v("gmx grompp`` and")]),e._v("gmx mdrun"),o("code",[e._v(", then")]),e._v("gmx energy``` and trajectory visualization tools).")]),e._v(" "),o("p",[e._v("10: Select the appropriate simulation parameters for the production simulation (defined in "),o("code",[e._v("mdp")]),e._v(" file). In particular, be careful not to re-generate the velocities. You still need to be consistent with how the force field was derived and how to measure the property or phenomena of interest.")]),e._v(" "),o("h3",{attrs:{id:"database-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#database-files"}},[e._v("#")]),e._v(" Database files")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("share/top")]),e._v(" directory of a GROMACS installation contains numerous plain-text helper files with the "),o("code",[e._v(".dat")]),e._v(" file extension. Some of the command-line tools (see "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/2018/user-guide/cmdline.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Command-line reference"),o("OutboundLink")],1),e._v(") refer to these, and each tool documents which files it uses, and how they are used.")]),e._v(" "),o("p",[e._v("If you need to modify these files (e.g. to introduce new atom types with VDW radii into "),o("code",[e._v("vdwradii.dat")]),e._v("), you can copy the file from your installation directory into your working directory, and the GROMACS tools will automatically load the copy from your working directory rather than the standard one. To suppress all the standard definitions, use an empty file in the working directory.")]),e._v(" "),o("h3",{attrs:{id:"gmx-insert-molecules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gmx-insert-molecules"}},[e._v("#")]),e._v(" gmx insert-molecules")]),e._v(" "),o("p",[o("code",[e._v("gmx insert-molecules")]),e._v(" inserts "),o("code",[e._v("-nmol")]),e._v(" copies of the system specified in the "),o("code",[e._v("-ci")]),e._v(" input file. The insertions take place either into vacant space in the solute conformation given with "),o("code",[e._v("-f")]),e._v(", or into an empty box given by "),o("code",[e._v("-box")]),e._v(". Specifying both "),o("code",[e._v("-f")]),e._v(" and "),o("code",[e._v("-box")]),e._v(" behaves like "),o("code",[e._v("-f")]),e._v(", but places a new box around the solute before insertions. Any velocities present are discarded.")]),e._v(" "),o("p",[e._v("It is possible to also insert into a solvated configuration and replace solvent atoms with the inserted atoms. To do this, use "),o("code",[e._v("-replace")]),e._v(" to specify a selection that identifies the atoms that can be replaced. The tool assumes that all molecules in this selection consist of single residues: each residue from this selection that overlaps with the inserted molecules will be removed instead of preventing insertion.")]),e._v(" "),o("p",[e._v("By default, the insertion positions are random (with initial seed specified by "),o("code",[e._v("-seed")]),e._v("). The program iterates until "),o("code",[e._v("-nmol")]),e._v(" molecules have been inserted in the box. Molecules are not inserted where the distance between any existing atom and any atom of the inserted molecule is less than the sum based on the van der Waals radii of both atoms. A database ("),o("code",[e._v("vdwradii.dat")]),e._v(") of van der Waals radii is read by the program, and the resulting radii scaled by "),o("code",[e._v("-scale")]),e._v(". If radii are not found in the database, those atoms are assigned the (pre-scaled) distance "),o("code",[e._v("-radius")]),e._v(". Note that the usefulness of those radii depends on the atom names, and thus varies widely with force field.")]),e._v(" "),o("p",[e._v("A total of "),o("code",[e._v("-nmol")]),e._v(" * "),o("code",[e._v("-try")]),e._v(" insertion attempts are made before giving up. Increase "),o("code",[e._v("-try")]),e._v(" if you have several small holes to fill. Option "),o("code",[e._v("-rot")]),e._v(" specifies whether the insertion molecules are randomly oriented before insertion attempts.")]),e._v(" "),o("p",[e._v("Alternatively, the molecules can be inserted only at positions defined in positions.dat ("),o("code",[e._v("-ip")]),e._v("). That file should have 3 columns (x,y,z), that give the displacements compared to the input molecule position ("),o("code",[e._v("-ci")]),e._v("). Hence, if that file should contain the absolute positions, the molecule must be centered on (0,0,0) before using "),o("code",[e._v("gmx insert-molecules")]),e._v(" (e.g. from "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/2018/onlinehelp/gmx-editconf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("gmx editconf"),o("OutboundLink")],1),e._v(" "),o("code",[e._v("-center")]),e._v("). Comments in that file starting with # are ignored. Option "),o("code",[e._v("-dr")]),e._v(" defines the maximally allowed displacements during insertial trials. "),o("code",[e._v("-try")]),e._v(" and "),o("code",[e._v("-rot")]),e._v(" work as in the default mode (see above).")]),e._v(" "),o("p",[e._v("gmx insert-molecules命令的可选项的含义如下：")]),e._v(" "),o("p",[e._v("Options to specify input files:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("-f")]),e._v(" [<.gro/.g96/...>] (protein.gro) (Optional)")]),e._v(" "),o("p",[e._v("Existing configuration to insert into: "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#gro",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("gro")]),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#g96",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("g96")]),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#pdb",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("pdb")]),o("OutboundLink")],1),e._v(" brk ent esp "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#tpr",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("tpr")]),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-ci")]),e._v(" [<.gro/.g96/...>] (insert.gro)")]),e._v(" "),o("p",[e._v("Configuration to insert: "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#gro",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("gro")]),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#g96",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("g96")]),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#pdb",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("pdb")]),o("OutboundLink")],1),e._v(" brk ent esp "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#tpr",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("tpr")]),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-ip")]),e._v(" [<.dat>] (positions.dat) (Optional)")]),e._v(" "),o("p",[e._v("Predefined insertion trial positions")])])]),e._v(" "),o("p",[e._v("Options to specify output files:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("-o")]),e._v(" [<.gro/.g96/...>] (out.gro)")]),e._v(" "),o("p",[e._v("Output configuration after insertion: "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#gro",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("gro")]),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#g96",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("g96")]),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"http://manual.gromacs.org/documentation/5.1/user-guide/file-formats.html#pdb",target:"_blank",rel:"noopener noreferrer"}},[o("em",[e._v("pdb")]),o("OutboundLink")],1),e._v(" brk ent esp")])])]),e._v(" "),o("p",[e._v("Other options:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("-box")]),e._v(" "),o("vector",[e._v(" (0 0 0)")])],1),e._v(" "),o("p",[e._v("Box size (in nm)")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-nmol")]),e._v(" "),o("int",[e._v(" (0)")])],1),e._v(" "),o("p",[e._v("Number of extra molecules to insert")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-try")]),e._v(" "),o("int",[e._v(" (10)")])],1),e._v(" "),o("p",[e._v("Try inserting "),o("code",[e._v("-nmol")]),e._v(" times "),o("code",[e._v("-try")]),e._v(" times")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-seed")]),e._v(" "),o("int",[e._v(" (1997)")])],1),e._v(" "),o("p",[e._v("Random generator seed")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-radius")]),e._v(" "),o("real",[e._v(" (0.105)")])],1),e._v(" "),o("p",[e._v("Default van der Waals distance")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-scale")]),e._v(" "),o("real",[e._v(" (0.57)")])],1),e._v(" "),o("p",[e._v("Scale factor to multiply Van der Waals radii from the database in share/gromacs/top/vdwradii.dat. The default value of 0.57 yields density close to 1000 g/l for proteins in water.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-dr")]),e._v(" "),o("vector",[e._v(" (0 0 0)")])],1),e._v(" "),o("p",[e._v("Allowed displacement in x/y/z from positions in "),o("code",[e._v("-ip")]),e._v(" file")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("-rot")]),e._v(" "),o("enum")],1),e._v(" "),o("p",[e._v("Rotate inserted molecules randomly: xyz, z, none")])])]),e._v(" "),o("h3",{attrs:{id:"how-does-one-create-an-itp-pdb-file-of-a-molecule"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-does-one-create-an-itp-pdb-file-of-a-molecule"}},[e._v("#")]),e._v(" How does one create an .itp/.pdb file of a molecule?")]),e._v(" "),o("p",[e._v("If I have a molecule decane 1-thiol. I have to create its .itp file because I have to include it into .top file.  How to do that?")]),e._v(" "),o("p",[e._v("方法可以有不同。这里我列出两种：")]),e._v(" "),o("p",[e._v("1： "),o("a",{attrs:{href:"https://www.researchgate.net/deref/http%3A%2F%2Fcharmm-gui.org%2F%3Fdoc%3Dinput%2Fligandrm",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://charmm-gui.org/?doc=input/ligandrm"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("You could use this website to generate *.itp files for your small molecules. Hope this helps!")]),e._v(" "),o("p",[e._v("2： Copy and paste the coordinates from pdb file of the molecule to the PRODRG server. It will generate the gro and itp files. Then you can include that itp file into the .top file.")]),e._v(" "),o("p",[e._v("PRODRG服务器的提交主页是 http://prodrg1.dyndns.org/submit.html。")]),e._v(" "),o("p",[e._v("这里，我用第二种方法生成nitrate的PDB 文件。其中，nitrate的xyz文件很容易获得。我从我以前的轨迹文件中找得到！在vmd里可以把xyz转化成pdb. 然后把这个文件复制到PRODRG服务器的提交主页 http://prodrg1.dyndns.org/submit.html， 它会生成各式各样的格式供我使用。")]),e._v(" "),o("p",[e._v("(不要忘了引用PRODRG.")]),e._v(" "),o("p",[e._v("When using PRODRG-generated files in a publication, please cite:")]),e._v(" "),o("p",[e._v('A. W. Schüttelkopf and D. M. F. van Aalten (2004). "PRODRG: a tool for high-throughput crystallography of protein-ligand complexes", '),o("em",[e._v("Acta Crystallogr")]),e._v(" D60, 1355–1363.")]),e._v(" "),o("p",[e._v("现在，我有利用PRODRG生成的pdb文件(名为DRGPOH.PDB)，我就可以利用下面的命令，把nitrate离子插入到只含有水分子的模拟盒子中。")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("gmx insert-molecules -f water_solv2.gro -ci DRGPOH.PDB -o water_with_nitrate -nmol "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -try "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" -replace WAT\n")])])]),o("p",[e._v("其中，可选项的含义见上文。")]),e._v(" "),o("p",[e._v("当得到输出文件"),o("code",[e._v("water_with_nitrate.gro")]),e._v(",  我就可以用VMD来查它，从而检验nitrate是否真的已经插入到水中。")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("vmd water_with_nitrate.gro\n")])])]),o("p",[e._v("接下来的问题是，阳离子怎么加入进来？")]),e._v(" "),o("p",[e._v("我在上面的基础上，再生成pdb文件，然后再次利用insert-molecules命令:")]),e._v(" "),o("div",{staticClass:"language-shell extra-class"},[o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",[e._v("gmx insert-molecules -f water_with_nitrate.gro -ci Li.pdb -o water_with_nitrate_2.gro -nmol "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -try "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" -replace WAT\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);
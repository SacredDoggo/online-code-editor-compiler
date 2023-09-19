interface langModel {
    'hackereathapi': string;
    'mode-ace': string;
    'boilerplate': string;
}

const lang = {
    'c' : {
        'hackerearthapi': 'C',
        'mode-ace': 'c_cpp',
        'boilerplate' : '#include<stdio.h>\n\nint main()\n{\n\n\tprrintf("Hello, World!);\n\treturn 0;\n}'
    },
    'cpp14' : {
        'hackerearthapi': 'CPP14',
        'mode-ace': 'c_cpp',
        'boilerplate' : '#include<iostream>\n\nint main()\n{\n\n\tstd::cout << \"Hello, World!\";\n\treturn 0;\n}'
    },
    'cpp17' : {
        'hackerearthapi': 'CPP17',
        'mode-ace': 'c_cpp',
        'boilerplate' : '#include<iostream>\n\nint main()\n{\n\n\tstd::cout << \"Hello, World!\";\n\treturn 0;\n}'
    },
    'python2' : {
        'hackerearthapi': 'PYTHON',
        'mode-ace': 'python',
        'boilerplate' : 'print "Hello, OVK!"'
    },
    'python3' : {
        'hackerearthapi': 'PYTHON3',
        'mode-ace': 'python',
        'boilerplate' : 'print("Hello, OVK!")'
    },
    'python3_8' : {
        'hackerearthapi': 'PYTHON3_8',
        'mode-ace': 'python',
        'boilerplate' : 'print("Hello, OVK!")'
    },
    'java8' : {
        'hackerearthapi': 'JAVA8',
        'mode-ace': 'java',
        'boilerplate': 'public class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.print("Hello, World!");\n\t}\n}'
    },
    'java14' : {
        'hackerearthapi': 'JAVA14',
        'mode-ace': 'java',
        'boilerplate': 'public class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.print("Hello, World!");\n\t}\n}'
    },
    'javascript' : {
        'hackerearthapi': 'JAVASCRIPT_NODE',
        'mode-ace': 'java',
        'boilerplate': 'console.log("Hello, World!");'
    }
}

export default lang;
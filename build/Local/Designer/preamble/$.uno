using Uno;
using Uno.Collections;
using Uno.UX;
using Uno.IO;
using Outracks.Simulator;
using Outracks.Simulator.Bytecode;
using Outracks.Simulator.Runtime;
using Outracks.Simulator.Client;
namespace Outracks.Simulator 
{ 
	public class GeneratedApplication : Outracks.Simulator.Client.Application
	{
		public GeneratedApplication()
			: base(
				new [] 
				{new Uno.Net.IPEndPoint(Uno.Net.IPAddress.Parse("127.0.0.1"), 12124), new Uno.Net.IPEndPoint(Uno.Net.IPAddress.Parse("10.1.59.193"), 12124)},"/Users/jaeyounchae/Documents/fuse/DreamPlus_Login/DreamPlus_Login.unoproj",new string[] 
				{ })
		{
			Runtime.Bundle.Initialize("DreamPlus_Login");

			if defined(DotNet)
				Reflection = new DotNetReflectionWrapper(DotNetReflection.Load("/Users/jaeyounchae/Documents/fuse/DreamPlus_Login/build/Local/Designer"));
			if defined(CPLUSPLUS)
				Reflection = new NativeReflection(new SimpleTypeMap());
		}
	}
}
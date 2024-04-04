var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader'); 
var roleBuilder = require('role.builder');
var roleMiner = require('role.miner');
var roleCenter = require('role.center');
var roleHarvesterUpgr = require('role.harvester_upgr');
var roleClaimer = require('role.claimer');
var roleBuilderM = require('role.builder_m');
var roleMinerM = require('role.miner_m');
var roleAttackerM = require('role.attacker_m');
var roleHealerM = require('role.healer_m');
var roleTransfer = require('role.transfer');
var roleZavodskoy = require('role.zavodskoy');
const { lastIndexOf } = require('lodash');


module.exports.loop = function() {
    Game.cpu.generatePixel();
    
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }
    
    var my_spawns = ['Spawn1', 'Spawn3'];
    
    _.forEach(my_spawns, function(room_spawn){
        var towers = Game.spawns[room_spawn].room.find(FIND_MY_STRUCTURES, {
            filter: {structureType: STRUCTURE_TOWER}
        })
        _.forEach(towers, function(tower){
            var damagedStructures = tower.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (
                        structure.structureType != STRUCTURE_WALL &&
                        structure.structureType != STRUCTURE_RAMPART &&
                        structure.hits < structure.hitsMax);
                    }
            });
            if(damagedStructures.length > 0){
            var closestDamagedStructure = tower.pos.findClosestByRange(damagedStructures);
            var closestDamagedWall = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return(structure.hits < structure.hitsMax) &&
                    structure.hits < 1000000;
                }
            });
            if(closestDamagedStructure || closestDamagedWall) {
                if(tower.store[RESOURCE_ENERGY] > 0){
                    tower.repair(closestDamagedStructure);
                    if(!closestDamagedStructure && tower.store[RESOURCE_ENERGY] > 200){
                        tower.repair(closestDamagedWall);
                    }
                }
            }
        }
        var hostiles = tower.room.find(FIND_HOSTILE_CREEPS);
        if(hostiles.length > 0) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            tower.attack(closestHostile);
        }
        });

        var extantions = Game.spawns[room_spawn].room.find(FIND_MY_STRUCTURES, {
            filter: (structure) => {
                return(structure.structureType == STRUCTURE_EXTENSION) &&
                structure.isActive();
            }
        });
        
        var links = Game.spawns[room_spawn].room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return(structure.structureType == STRUCTURE_LINK
                    //||structure.structureType == STRUCTURE_CONTAINER
                    );
            }
        });
        
        var closest_link = Game.spawns[room_spawn].pos.findClosestByRange(links);
        _.forEach(links, function(link){
            if(link != closest_link){
                link.transferEnergy(closest_link);
            }
        });

        var sources = Game.spawns[room_spawn].room.find(FIND_SOURCES);
        var constr_sites = Game.spawns[room_spawn].room.find(FIND_CONSTRUCTION_SITES);
        if(extantions.length < 5){
            var room_level = "level 1";
            var Harvester_BP = [WORK,WORK,CARRY,MOVE];
            var maxHarvesters = 5;
            var Ugrader_BP = [WORK,WORK,CARRY,MOVE];
            var maxUpgraders = 5;
            var Builder_BP = [WORK,CARRY,CARRY,MOVE];
            var maxBuilders = 5;
            var maxCenters = 0;
            var CenterBP = [CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 5;
            var HarvesterUpgr_BP = [WORK,WORK,CARRY,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        }
        if(extantions.length < 10 && extantions.length >= 5){
            var room_level = "level 2";
            var Harvester_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 0;
            var CenterBP = [CARRY, MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        }
        if(extantions.length < 20 && extantions.length >= 10){
            var room_level = "level 3";
            var Harvester_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,WORK,CARRY,CARRY,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 0;
            var CenterBP = [CARRY, MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        }
        if(extantions.length < 30 && extantions.length >= 20){
            var room_level = "level 4";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY, MOVE,CARRY,MOVE,CARRY,MOVE,CARRY,MOVE];
            var maxHarvestersUpgr = 2;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        }
        if(extantions.length < 40 && extantions.length >= 30){
            var room_level = "level 5";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 2;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 2;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 2;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        }
        if(extantions.length < 50 && extantions.length >= 40){
            var room_level = "level 6";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        }
        if(extantions.length < 60 && extantions.length >= 50 ){
            var room_level = "level 7";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 1;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxTransferers = 0;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 0;
            var Zavodskoy_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
        }
        if(extantions.length >= 60 ){
            var room_level = "level 8";
            var Harvester_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE];
            var maxHarvesters = 1;
            var Ugrader_BP = [WORK,CARRY,MOVE];
            var maxUpgraders = 1;
            var Builder_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxBuilders = 5;
            var maxCenters = 1;
            var CenterBP = [CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxHarvestersUpgr = 1;
            var HarvesterUpgr_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE];
            var maxTransferers = 1;
            var Trasnferer_BP = [CARRY,CARRY,MOVE,MOVE];
            var maxZavodskoy = 1;
            var Zavodskoy_BP = [CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
            var maxClaimers = 0;
            var Claimer_BP = [CLAIM, MOVE];
            var maxBuildersM = 0;
            var Builder_M_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
            var maxMiners = 0;
            var Miner_BP = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE];
        }
        console.log(extantions.length + Game.spawns[room_spawn].room + room_level);
       if(Game.time % 10 ==0){
            var testIfCanSpawn = Game.spawns[room_spawn].spawnCreep(Harvester_BP, 'dry',
            { dryRun: true });
            var testIfCanSpawnC = Game.spawns[room_spawn].spawnCreep(CenterBP, 'dry',
            { dryRun: true });
            _.forEach(Ugrader_BP, function(body){
                console.log(body);
            });
            console.log(Game.spawns[room_spawn].spawnCreep(Ugrader_BP, 'dry',
        { dryRun: true }));
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.room == Game.spawns[room_spawn].room);
            var reserve_harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.room == Game.spawns[room_spawn].room && creep.body[0].type == WORK && creep.body[1].type == CARRY && creep.body[2].type == MOVE);
        if(Game.spawns[room_spawn].spawnCreep() != 0){
            var spawn_list = Game.spawns[room_spawn].room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return(structure.structureType == STRUCTURE_SPAWN) &&
                    structure.isActive();
                }
            });
        }
        else{
            var spawn_list = Game.spawns[room_spawn];
        }
        _.forEach(spawn_list, function(room_spawn){
        
        if(harvesters.length < maxHarvesters && testIfCanSpawn == 0){
            var newHarvesterName = 'H_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep(Harvester_BP, newHarvesterName,
                {memory: {role: 'harvester'}});
        }
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.room == room_spawn.room);
        if(upgraders.length < maxUpgraders && harvesters.length == maxHarvesters && testIfCanSpawn == 0 && reserve_harvesters.length == 0){
            var newUpgraderName = 'U_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep(Ugrader_BP, newUpgraderName,
                {memory: {role: 'upgrader'}});
        }
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.room == room_spawn.room);
        if(builders.length < maxBuilders && harvesters.length == maxHarvesters && constr_sites.length > 0 && upgraders.length == maxUpgraders && testIfCanSpawn == 0 && reserve_harvesters.length == 0){
            var newBuilderName = 'B_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep(Builder_BP, newBuilderName,
                {memory: {role: 'builder'}});
        }
        var centers = _.filter(Game.creeps, (creep) => creep.memory.role == 'center' && creep.room == room_spawn.room);
        if(centers.length < maxCenters && links.length >= 1 && testIfCanSpawnC == 0 && testIfCanSpawn == 0){
            var newCenterName = 'C_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep(CenterBP, newCenterName,
                {memory: {role: 'center'}});
        }
        var harvester_upgr = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester_upgr' && creep.room == room_spawn.room);
        if(harvester_upgr.length < maxHarvestersUpgr && harvesters.length == maxHarvesters && sources.length >= 2 && testIfCanSpawn == 0) {
            var newHarvesterUpgrName = 'HU_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep(HarvesterUpgr_BP, newHarvesterUpgrName,
                {memory: {role: 'harvester_upgr'}});
        }
        if(harvesters.length < 1 && testIfCanSpawn != 0){
            var newHarvesterName = 'H_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep([WORK,CARRY,MOVE], newHarvesterName,
                {memory: {role: 'harvester'}});
        }
        if(centers.length < 1 && testIfCanSpawn == -6){
            var newCenterName = 'C_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep([CARRY,MOVE,CARRY,MOVE,CARRY,MOVE], newCenterName,
                {memory: {role: 'center'}});
        }
        /*
        var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
        if(claimers.length < maxClaimers && harvesters.length == maxHarvesters && testIfCanSpawn == 0 && reserve_harvesters.length == 0){
            var newClaimerName = 'C_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep(Claimer_BP, newClaimerName,
                {memory: {role: 'claimer'}});
        }
        var builders_m = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder_m');
        if(builders_m.length < maxBuildersM && harvesters.length == maxHarvesters && testIfCanSpawn == 0 && reserve_harvesters.length == 0){
            var newBuilderMName = 'BM_2.0_' + Game.time + "_" + room_spawn.room;
            room_spawn.spawnCreep(Builder_M_BP, newBuilderMName,
                {memory: {role: 'builder_m'}});
        }
        */
       });
    }
    });
    
    


    
    
    
    
    
    
    
    
    
    
    

    /*
    if(Game.time % 10000 == 0){
        console.log('NOTIFICATION HAS BEEN SENT');
        Game.notify("Your curent balance is: " + Game.market.credits);
    }
    */
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'center') {
            roleCenter.run(creep);
        }
        if(creep.memory.role == 'harvester_upgr') {
            roleHarvesterUpgr.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'builder_m') {
            roleBuilderM.run(creep);
        }
        if(creep.memory.role == 'transfer') {
            roleTransfer.run(creep);
        }
        if(creep.memory.role == 'zavodskoy') {
            roleZavodskoy.run(creep);
        }
    }
    console.log(Game.cpu.bucket);
    console.log('Time: ' +  Game.time);
    console.log('OK!')
}
    
